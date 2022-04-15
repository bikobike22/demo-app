import {createClient} from '@supabase/supabase-js' 

export const supabase = createClient(
    "https://piqdckxrbpzknmyusvsy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpcWRja3hyYnB6a25teXVzdnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAwMzgwMzksImV4cCI6MTk2NTYxNDAzOX0.Y6WlSygqw9Uni5T6KM_7ES-hVMWStT7V_dlE7IP0u2E"
)