import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://arpesgzfmielerqdpgcb.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFycGVzZ3pmbWllbGVycWRwZ2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1ODc2NzMsImV4cCI6MjA3OTE2MzY3M30.8jueV5CBstpaqURJst2evOdsidcYmqd_eh_WC78oLVU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
