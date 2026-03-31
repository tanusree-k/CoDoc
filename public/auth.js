/* ─────────────────────────────────────────────────────────────────
   CoDoc auth.js — handles sign in / sign up logic
───────────────────────────────────────────────────────────────── */

// Tab switching — defined first, before anything async so it's always available
window.showTab = function(tab) {
  const isSignin = tab === 'signin';
  document.getElementById('form-signin').classList.toggle('hidden', !isSignin);
  document.getElementById('form-signup').classList.toggle('hidden', isSignin);
  document.getElementById('tab-signin').classList.toggle('active', isSignin);
  document.getElementById('tab-signup').classList.toggle('active', !isSignin);
};

// Show / clear error
function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.backgroundColor = '';
  el.style.color = '';
  el.style.borderColor = '';
  el.classList.remove('hidden');
}
function clearError(id) {
  document.getElementById(id).classList.add('hidden');
}

// Show success (green banner)
function showSuccess(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.backgroundColor = '#d1fae5';
  el.style.color = '#059669';
  el.style.borderColor = '#10b981';
  el.classList.remove('hidden');
}

// Attach tab click listeners once DOM is ready (backup for onclick attrs)
document.addEventListener('DOMContentLoaded', function() {
  const tabSignin = document.getElementById('tab-signin');
  const tabSignup = document.getElementById('tab-signup');
  if (tabSignin) tabSignin.addEventListener('click', () => showTab('signin'));
  if (tabSignup) tabSignup.addEventListener('click', () => showTab('signup'));
});

// Get supabase client — wait for it to be available
function getSupabase() {
  if (window.supabaseClient) return window.supabaseClient;
  // Fallback: try to create it
  if (window.supabase) {
    const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs';
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.supabaseClient;
  }
  return null;
}

// Redirect if already logged in
(async () => {
  try {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      const params = new URLSearchParams(window.location.search);
      const next = params.get('next');
      window.location.href = next || '/dashboard.html';
    }
  } catch(e) {
    console.error('Auth init error:', e);
  }
})();

// Sign In
window.handleSignIn = async function(e) {
  e.preventDefault();
  clearError('si-error');
  const email = document.getElementById('si-email').value.trim();
  const password = document.getElementById('si-password').value;
  const btn = document.getElementById('si-btn');
  btn.disabled = true; btn.textContent = 'Signing in…';

  try {
    const sb = getSupabase();
    if (!sb) { showError('si-error', 'Client not ready. Please refresh.'); btn.disabled = false; btn.textContent = 'Sign In →'; return; }

    const { data, error } = await sb.auth.signInWithPassword({ email, password });

    if (error) { 
      showError('si-error', error.message || 'Login failed'); 
      btn.disabled = false; btn.textContent = 'Sign In →'; 
      return; 
    }

    const params = new URLSearchParams(window.location.search);
    window.location.href = params.get('next') || '/dashboard.html';
  } catch(err) {
    showError('si-error', 'Network error. Please try again.');
    btn.disabled = false; btn.textContent = 'Sign In →';
  }
};

// Sign Up
window.handleSignUp = async function(e) {
  e.preventDefault();
  clearError('su-error');
  const username = document.getElementById('su-username').value.trim();
  const email = document.getElementById('su-email').value.trim();
  const password = document.getElementById('su-password').value;
  const btn = document.getElementById('su-btn');
  btn.disabled = true; btn.textContent = 'Creating account…';

  try {
    const sb = getSupabase();
    if (!sb) { showError('su-error', 'Client not ready. Please refresh.'); btn.disabled = false; btn.textContent = 'Create Account →'; return; }

    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { username } }
    });

    if (error) { 
      showError('su-error', error.message || 'Registration failed'); 
      btn.disabled = false; btn.textContent = 'Create Account →'; 
      return; 
    }

    // If email confirmation is required, session is null
    if (!data.session) {
      showSuccess('su-error', '✓ Account created! Please check your email to verify, then sign in.');
      btn.disabled = false; 
      btn.textContent = 'Create Account →';
      return;
    }

    const params = new URLSearchParams(window.location.search);
    window.location.href = params.get('next') || '/dashboard.html';
  } catch(err) {
    showError('su-error', 'Network error. Please try again.');
    btn.disabled = false; btn.textContent = 'Create Account →';
  }
};

// Check for error params in URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('error') === 'invalid_link') {
  showError('si-error', 'Invalid or expired share link.');
} else if (urlParams.get('error') === 'no_profile') {
  showError('si-error', 'Your profile could not be found. Please contact support.');
}
