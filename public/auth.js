/* ─────────────────────────────────────────────────────────────────
   CoDoc auth.js — handles sign in / sign up logic
───────────────────────────────────────────────────────────────── */

// Track whether the current sign-up session is completing a Google OAuth flow
let isGoogleSignUpFlow = false;

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

  // ── Handle ?new_google_user=1 redirect from auth-callback ──────
  // At this point the user is already signed in via Google OAuth.
  // We just need them to pick a username before creating their profile.
  const params = new URLSearchParams(window.location.search);
  if (params.get('new_google_user') === '1') {
    isGoogleSignUpFlow = true;

    // Switch to the Sign Up tab
    showTab('signup');

    // Show the info banner
    const banner = document.getElementById('google-user-banner');
    if (banner) banner.classList.remove('hidden');

    // Hide Google button & divider (they're already signed in)
    const googleBtn = document.getElementById('su-google-btn');
    if (googleBtn) googleBtn.style.display = 'none';
    const divider = document.getElementById('su-divider');
    if (divider) divider.style.display = 'none';

    // Pre-fill email (read-only — Supabase already has it)
    const emailInput = document.getElementById('su-email');
    const emailParam = params.get('email');
    if (emailInput && emailParam) {
      emailInput.value = decodeURIComponent(emailParam);
      emailInput.readOnly = true;
      emailInput.style.background = '#f9fafb';
    }

    // Pre-fill username suggestion from Google name
    const nameParam = params.get('name');
    const usernameInput = document.getElementById('su-username');
    if (usernameInput && nameParam) {
      usernameInput.value = decodeURIComponent(nameParam);
    }

    // Hide password fields (not needed — they're using Google auth)
    const pwGroup = document.getElementById('su-password-group');
    if (pwGroup) pwGroup.style.display = 'none';
    const cpwGroup = document.getElementById('su-confirm-password-group');
    if (cpwGroup) cpwGroup.style.display = 'none';

    // Hide "already have an account" link
    const switchEl = document.getElementById('su-switch');
    if (switchEl) switchEl.style.display = 'none';

    // Update button text
    const suBtn = document.getElementById('su-btn');
    if (suBtn) suBtn.textContent = 'Complete Sign Up →';

    // Update subtitle
    const subtitle = document.getElementById('su-subtitle');
    if (subtitle) subtitle.style.display = 'none';
  }
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

    // Don't redirect if we're in the Google sign-up completion flow
    const params = new URLSearchParams(window.location.search);
    if (params.get('new_google_user') === '1') return;

    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      const next = params.get('next');
      window.location.href = next || '/dashboard.html';
    }
  } catch(e) {
    console.error('Auth init error:', e);
  }
})();

// Google Sign In (used from sign-in tab and the sign-up tab Google button)
window.handleGoogleSignIn = async function() {
  try {
    const sb = getSupabase();
    if (!sb) { showError('si-error', 'Client not ready. Please refresh.'); return; }
    
    const { data, error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/auth-callback.html'
      }
    });
    
    if (error) throw error;
  } catch(err) {
    showError('si-error', 'Google Sign-In failed. Please try again.');
  }
};

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

// Sign Up — routes to Google profile-creation OR normal email sign-up
window.handleSignUpOrGoogle = async function(e) {
  e.preventDefault();
  clearError('su-error');

  if (isGoogleSignUpFlow) {
    // ── Complete Google sign-up: user is already authenticated, just create profile ──
    await completeGoogleProfile();
  } else {
    // ── Normal email/password sign-up ──
    await handleEmailSignUp();
  }
};

async function completeGoogleProfile() {
  const username = document.getElementById('su-username').value.trim();
  const btn = document.getElementById('su-btn');
  btn.disabled = true; btn.textContent = 'Saving…';

  if (!username) {
    showError('su-error', 'Please enter a username.');
    btn.disabled = false; btn.textContent = 'Complete Sign Up →';
    return;
  }

  try {
    const sb = getSupabase();
    if (!sb) { showError('su-error', 'Client not ready. Please refresh.'); btn.disabled = false; btn.textContent = 'Complete Sign Up →'; return; }

    const { data: { user }, error: userErr } = await sb.auth.getUser();
    if (userErr || !user) {
      showError('su-error', 'Session expired. Please sign in with Google again.');
      btn.disabled = false; btn.textContent = 'Complete Sign Up →';
      return;
    }

    // Insert profile
    const { error: insertErr } = await sb.from('profiles').insert([{
      id: user.id,
      username,
      color: '#10b981'
    }]);

    if (insertErr) {
      showError('su-error', insertErr.message || 'Failed to save profile. Please try again.');
      btn.disabled = false; btn.textContent = 'Complete Sign Up →';
      return;
    }

    window.location.href = '/dashboard.html';
  } catch(err) {
    showError('su-error', 'Network error. Please try again.');
    btn.disabled = false; btn.textContent = 'Complete Sign Up →';
  }
}

async function handleEmailSignUp() {
  const username = document.getElementById('su-username').value.trim();
  const email = document.getElementById('su-email').value.trim();
  const password = document.getElementById('su-password').value;
  const confirmPassword = document.getElementById('su-confirm-password').value;
  const btn = document.getElementById('su-btn');
  btn.disabled = true; btn.textContent = 'Creating account…';

  if (!email || !password || !confirmPassword) {
    showError('su-error', 'Please fill in all fields.');
    btn.disabled = false; btn.textContent = 'Create Account →';
    return;
  }

  if (password !== confirmPassword) {
    showError('su-error', 'Passwords do not match.');
    btn.disabled = false; btn.textContent = 'Create Account →';
    return;
  }

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
}

// Guest Login
window.handleGuestLogin = async function(e) {
  if(e) e.preventDefault();
  clearError('si-error');
  const btn = document.getElementById('guest-btn');
  if(btn) { btn.disabled = true; btn.textContent = 'Signing in…'; }

  try {
    const sb = getSupabase();
    if (!sb) { 
      showError('si-error', 'Client not ready. Please refresh.'); 
      if(btn) { btn.disabled = false; btn.textContent = 'Login as guest'; }
      return; 
    }

    const { data, error } = await sb.auth.signInAnonymously();

    if (error) { 
      showError('si-error', error.message || 'Guest login failed. Anonymous sign-in may not be enabled.'); 
      if(btn) { btn.disabled = false; btn.textContent = 'Login as guest'; }
      return; 
    }

    const params = new URLSearchParams(window.location.search);
    window.location.href = params.get('next') || '/dashboard.html';
  } catch(err) {
    showError('si-error', 'Network error. Please try again.');
    if(btn) { btn.disabled = false; btn.textContent = 'Login as guest'; }
  }
};

// Check for error params in URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('error') === 'invalid_link') {
  showError('si-error', 'Invalid or expired share link.');
} else if (urlParams.get('error') === 'no_profile') {
  showError('si-error', 'Your profile could not be found. Please contact support.');
}
