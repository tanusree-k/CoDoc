require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY);

async function checkHistory() {
  const { data, error } = await supabaseAdmin.from('document_history').select('*').limit(1);
  if (error) {
    console.error('History API error:', error);
  } else {
    console.log('History data:', data);
  }
}
checkHistory();
