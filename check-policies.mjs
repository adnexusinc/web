import { createClient } from '@supabase/supabase-js';

const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4dWhjbHJvZHFwZHlyaHp5cGl2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTk5Nzg3NCwiZXhwIjoyMDcxNTczODc0fQ.n-D-nkhsCpVAts2jywz8FiOQi2UHBgU62NJubF4YBp4';
const supabase = createClient('https://uxuhclrodqpdyrhzypiv.supabase.co', SERVICE_KEY);

// Try to query policies using service role
const { data, error } = await supabase
  .from('pg_policies')
  .select('*')
  .eq('tablename', 'contacts');

if (error) {
  console.log('Cannot query policies:', error.message);
  console.log('\nThe RLS SQL needs to be run in Supabase SQL Editor.');
  console.log('Go to: https://supabase.com/dashboard/project/uxuhclrodqpdyrhzypiv/sql/new');
} else {
  console.log('Current policies on contacts table:');
  console.table(data);
}
