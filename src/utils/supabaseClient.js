import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://extvxlpnpofncdhhveto.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4dHZ4bHBucG9mbmNkaGh2ZXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMTE1NDgsImV4cCI6MTk5Mzc4NzU0OH0.VusHwPnAF-vHG4URtKMzdZnNWnZizWoxhY0tm91OzFI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
