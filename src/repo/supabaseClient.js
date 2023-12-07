import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://fsftyfflfxuwvbkwctaz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZnR5ZmZsZnh1d3Zia3djdGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5MzM5OTEsImV4cCI6MjAxNzUwOTk5MX0._NNormkSNr6eIXzkef-wjm4cIHNf_2sCt2vCHuaRdFI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)