'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export type ApplicationData = {
  first_name: string
  last_name: string
  email: string
  phone: string
  city_state: string
  franchise_model: string
  occupation?: string
  message?: string
}

export async function submitApplication(data: ApplicationData) {
  const { error } = await supabase
    .from('franchise_applications')
    .insert([{
      ...data,
      submitted_at: new Date().toISOString(),
      status: 'new',
    }])

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}
