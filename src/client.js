import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://ftwmnhawrdyugvyjyqbi.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0d21uaGF3cmR5dWd2eWp5cWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM4ODg4MjAsImV4cCI6MTk2OTQ2NDgyMH0.rA6f_7qidd0JRkhyq_LZtQkFiIgEsaAAuLVFEV21h9A'
);
