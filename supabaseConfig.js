import { createClient } from "@supabase/supabase-js";

 export const supabaseUrl = "https://ilfpixqjoglecwnsqahw.supabase.co";
 export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZnBpeHFqb2dsZWN3bnNxYWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NTA5NjMsImV4cCI6MjA1NTUyNjk2M30.o5kzBSwuKB5ThwdIyhYcx5QC0u3XFJOlDGDBo90oIKg"; // Get this from Supabase settings

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
