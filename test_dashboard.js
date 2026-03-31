const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function test() {
  console.log("Logging in as the test user...");
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: 'testuser@example.com', // wait, let's just make a brand new one
    password: 'password123'
  });
  
  if (authError) {
    // If it doesn't exist, create it
    const { data: suData } = await supabase.auth.signUp({
      email: 'testuser123@example.com',
      password: 'password123',
      options: { data: { username: 'testuser123' } }
    });
    
    await new Promise(r => setTimeout(r, 1000));
    const { data: loginData } = await supabase.auth.signInWithPassword({
      email: 'testuser123@example.com', 
      password: 'password123'
    });
  }

  const { data: { user }, error } = await supabase.auth.getUser();
  if (!user) {
    console.log("No user found:", error);
    return;
  }

  console.log("User retrieved. ID:", user.id);

  const { data: profile, error: profileErr } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  console.log("Profile check:", profile, "Error:", profileErr?.message);

  if (!profile) {
    console.log("Attempting to insert profile...");
    const { data: newProfile, error: insertErr } = await supabase.from('profiles').insert([{ id: user.id, username: 'tester', color: '#10b981' }]).select().single();
    if (insertErr) {
      console.error("Insert failed:", insertErr.message);
    } else {
      console.log("Insert succeeded:", newProfile);
    }
  }
}
test();
