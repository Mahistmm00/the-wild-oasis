import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://otfklbdwfncbpuclmbvq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZmtsYmR3Zm5jYnB1Y2xtYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMTA1MTEsImV4cCI6MjA3Njg4NjUxMX0.ExXAPsc6qez-ngV05yfh-scBYPP9GFJdEpNWRtS7Zs0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
