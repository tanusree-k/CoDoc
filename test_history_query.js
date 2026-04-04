require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY);

async function checkHistory() {
  const user_id = 'dbbd4cca-f215-4fa7-8730-a94f68673a0e';
  const docId = 'a9e1d88e-4a6c-4861-a1d2-0678d103b41e';
  
  let query = supabaseAdmin
      .from('document_history')
      .select('*')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false });
    
  if (docId) {
    query = query.eq('document_id', docId);
  }
  
  const { data, error } = await query;
  console.log('Result:', data);
  console.log('Error:', error);
}
checkHistory();
