// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzqktwawrrakutstvcsa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cWt0d2F3cnJha3V0c3R2Y3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMjQwNTMsImV4cCI6MjA2NTkwMDA1M30.2IxHOoPuLqq1rKpRKyMWEpV5Mqp717SwEFM1wVJQmaE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
