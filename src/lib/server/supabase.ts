import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ibqwvbhbhtmezmpafruk.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };

export default supabase;
