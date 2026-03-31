const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function test() {
  console.log("Testing Signup...");
  const { data: suData, error: suError } = await supabase.auth.signUp({
    email: 'test_auto_' + Date.now() + '@example.com',
    password: 'password123',
    options: { data: { username: 'test_user' } }
  });
  if (suError) {
    console.error("SignUp Error:", suError.message);
  } else {
    console.log("SignUp Success!");
  }
}
test();
