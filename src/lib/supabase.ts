
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://duvzwtsyyvnubzjwjygu.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_4d-ppMwHZ11MEgtcrBK8FQ_YjbHX-Ow';

export const supabase = createClient(supabaseUrl, supabaseKey);
