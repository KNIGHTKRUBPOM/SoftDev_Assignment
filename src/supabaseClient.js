import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gepciqooaaopwrhoqgfn.supabase.co/";
const supabaseKey = "sb_publishable_sYKcuuCWZspvq-BrizBEFA_4m6oCboz";

export const supabase = createClient(supabaseUrl, supabaseKey);