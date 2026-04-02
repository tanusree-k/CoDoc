/* ─────────────────────────────────────────────────────────────────
   CoDoc dashboard.js
───────────────────────────────────────────────────────────────── */

let currentUser = null;

// Defensive Supabase client lookup
function getSupabase() {
  if (window.supabaseClient) return window.supabaseClient;
  if (window.supabase) {
    const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs';
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.supabaseClient;
  }
  return null;
}

// Show a user-readable error in the loading area
function showLoadError(msg) {
  const loadEl = document.getElementById('loading');
  if (loadEl) loadEl.innerHTML = `<p style="color:#ef4444;text-align:center;">${msg}</p>`;
}

// ── Init ─────────────────────────────────────────────────────────
(async () => {
  try {
    const sb = getSupabase();
    if (!sb) {
      showLoadError('Could not connect to the backend. Please refresh the page.');
      return;
    }

    const { data: { user }, error } = await sb.auth.getUser();
    if (error || !user) {
      await sb.auth.signOut().catch(() => {});
      window.location.href = '/auth.html';
      return;
    }

    // Fetch profile
    const { data: profile, error: profileErr } = await sb
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (!profile) {
      // For anonymous/guest users, RLS may block direct insert — use server-side API
      const username = user.user_metadata?.username || (user.email ? user.email.split('@')[0] : 'Guest');

      // Try direct insert first
      const { data: newProfile } = await sb
        .from('profiles')
        .insert([{ id: user.id, username, color: '#10b981' }])
        .select()
        .single();

      if (newProfile) {
        currentUser = newProfile;
      } else {
        // Fallback: use server API (bypasses RLS for anonymous users)
        try {
          const resp = await fetch('/api/ensure-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, username })
          });
          const json = await resp.json();
          if (json.profile) {
            currentUser = json.profile;
          } else {
            throw new Error(json.error || 'Profile creation failed');
          }
        } catch (apiErr) {
          console.error('Failed to create profile via API:', apiErr);
          await sb.auth.signOut().catch(() => {});
          window.location.href = '/auth.html?error=no_profile';
          return;
        }
      }
    } else {
      currentUser = profile;
    }

    // Render avatar & name
    const av = document.getElementById('user-avatar');
    if (av) av.textContent = currentUser.username.charAt(0).toUpperCase();
    const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = currentUser.username;

    loadDocs();
  } catch (err) {
    console.error('Dashboard init error:', err);
    showLoadError('Something went wrong loading your dashboard. Please refresh.');
  }
})();

// ── Load documents ────────────────────────────────────────────────
async function loadDocs() {
  try {
    const sb = getSupabase();

    // Plain queries — no relational joins to avoid PGRST200 schema cache issues
    const { data: ownedDocs, error: err1 } = await sb
      .from('documents')
      .select('id, title, updated_at, owner_id')
      .eq('owner_id', currentUser.id);

    const { data: perms, error: err2 } = await sb
      .from('document_permissions')
      .select('doc_id, role')
      .eq('user_id', currentUser.id);

    // Fetch shared doc metadata separately
    let sharedDocs = [];
    if (perms && perms.length > 0) {
      const docIds = perms.map(p => p.doc_id);
      const { data: permDocs } = await sb
        .from('documents')
        .select('id, title, updated_at, owner_id')
        .in('id', docIds);
      sharedDocs = permDocs || [];
    }

    if (err1 || err2) {
      console.error(err1 || err2);
      showLoadError('Failed to load documents. Please refresh.');
      return;
    }

    let docs = (ownedDocs || []).map(d => ({
      id: d.id,
      title: d.title,
      updatedAt: d.updated_at,
      ownerId: d.owner_id,
      role: 'owner'
    }));

    // Build a map of doc_id → role from permissions
    const permRoleMap = {};
    (perms || []).forEach(p => { permRoleMap[p.doc_id] = p.role; });

    sharedDocs.forEach(d => {
      docs.push({
        id: d.id,
        title: d.title,
        updatedAt: d.updated_at,
        ownerId: d.owner_id,
        role: permRoleMap[d.id] || 'viewer'
      });
    });

    docs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const loadEl = document.getElementById('loading');
    if (loadEl) loadEl.classList.add('hidden');

    if (docs.length === 0) {
      const emptyEl = document.getElementById('empty-state');
      if (emptyEl) emptyEl.classList.remove('hidden');
      return;
    }

    const grid = document.getElementById('docs-grid');
    if (grid) {
      grid.classList.remove('hidden');
      grid.innerHTML = '';
      docs.forEach((doc, i) => grid.appendChild(createDocCard(doc, i)));
    }
  } catch (err) {
    console.error('loadDocs error:', err);
    showLoadError('Failed to load documents. Please refresh.');
  }
}

function createDocCard(doc, i) {
  const card = document.createElement('div');
  card.className = 'doc-card';
  card.style.animationDelay = `${i * 50}ms`;

  const isOwner = doc.ownerId === currentUser.id;
  const roleLabel = doc.role.charAt(0).toUpperCase() + doc.role.slice(1);
  const roleClass = `role-${doc.role}`;
  const deleteTitle = isOwner ? 'Delete document' : 'Remove from my list';

  card.innerHTML = `
    <div class="doc-card-icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    </div>
    <div class="doc-title">${escHtml(doc.title)}</div>
    <div class="doc-meta">
      <span>Edited ${timeAgo(doc.updatedAt)}</span>
      ${!isOwner ? '<span>by ' + escHtml(doc.ownerName || '') + '</span>' : ''}
    </div>
    <span class="doc-role-badge ${roleClass}">${roleLabel}</span>
    <div class="doc-card-actions">
      <button class="icon-btn" title="${deleteTitle}" onclick="deleteDoc(event, '${doc.id}', '${doc.role}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
      </button>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `/editor.html?doc=${doc.id}`;
  });

  return card;
}
// ── Actions ───────────────────────────────────────────────────────
document.getElementById('new-doc-btn').addEventListener('click', () => {
  document.getElementById('new-doc-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('new-doc-title').focus(), 50);
});

window.closeNewDocModal = function() {
  document.getElementById('new-doc-modal').classList.add('hidden');
};

document.getElementById('new-doc-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('new-doc-modal')) closeNewDocModal();
});

document.getElementById('new-doc-title').addEventListener('keydown', e => {
  if (e.key === 'Enter') createDocument();
  if (e.key === 'Escape') closeNewDocModal();
});

window.createDocument = async function() {
  const sb = getSupabase();
  const title = document.getElementById('new-doc-title').value.trim() || 'Untitled Document';
  const { data, error } = await sb
    .from('documents')
    .insert([{ title, owner_id: currentUser.id }])
    .select()
    .single();

  if (error || !data) { alert('Failed to create document. ' + (error?.message || '')); return; }
  closeNewDocModal();
  window.location.href = `/editor.html?doc=${data.id}`;
};

window.deleteDoc = async function(e, docId, role) {
  e.stopPropagation();

  const isOwner = role === 'owner';
  const confirmMsg = isOwner
    ? 'Delete this document permanently? This cannot be undone.'
    : 'Remove this document from your list? (The document will still exist for the owner.)';

  if (!confirm(confirmMsg)) return;

  // Find the card element to remove it from the DOM immediately
  const card = e.currentTarget.closest('.doc-card');

  const sb = getSupabase();

  if (isOwner) {
    // Hard delete — only the owner can do this
    const { error } = await sb.from('documents').delete().eq('id', docId);
    if (error) {
      alert('Failed to delete document: ' + (error.message || 'Unknown error'));
      return;
    }
  } else {
    // Remove only the permission row for the current user (leave the doc intact)
    const { error } = await sb
      .from('document_permissions')
      .delete()
      .eq('doc_id', docId)
      .eq('user_id', currentUser.id);
    if (error) {
      alert('Failed to remove document: ' + (error.message || 'Unknown error'));
      return;
    }
  }

  // Instantly remove the card from the DOM (no reload needed)
  if (card) {
    card.style.transition = 'opacity 0.2s, transform 0.2s';
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.remove();
      // If no cards remain, show empty state
      const grid = document.getElementById('docs-grid');
      if (grid && grid.querySelectorAll('.doc-card').length === 0) {
        grid.classList.add('hidden');
        const emptyEl = document.getElementById('empty-state');
        if (emptyEl) emptyEl.classList.remove('hidden');
      }
    }, 200);
  }
};

document.getElementById('logout-btn').addEventListener('click', async () => {
  const sb = getSupabase();
  await sb.auth.signOut();
  window.location.href = '/auth.html';
});

// ── Utilities ─────────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff/60) + 'm ago';
  if (diff < 86400) return Math.floor(diff/3600) + 'h ago';
  return Math.floor(diff/86400) + 'd ago';
}
