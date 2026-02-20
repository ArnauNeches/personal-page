import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://ofjvjcscbgjwbpptxzsf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ZlfYLSyN7dFNhmSU2sEkBA__IOnV23B';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);