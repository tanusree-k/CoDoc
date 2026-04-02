const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testSignIn() {
  console.log("Testing SignIn...");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'test_auto_1712000000000@example.com', // A made up email or the one we just made
    password: 'password123'
  });
  if (error) {
    console.error("SignIn Error:", error);
  } else {
    console.log("SignIn Success!");
  }
}

testSignIn();
