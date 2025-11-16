import { createClient } from '@supabase/supabase-js'

// Configuração do Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Função para verificar se Supabase está configurado
export const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  return !!(url && key && url.includes('supabase.co') && key.length > 20)
}

// Types para o banco de dados
export type User = {
  id: string
  email: string
  full_name: string
  created_at: string
  updated_at: string
}

export type Subscription = {
  id: string
  user_id: string
  plan_type: 'monthly' | 'annual' | 'lifetime'
  status: 'active' | 'cancelled' | 'expired'
  start_date: string
  end_date: string | null
  amount: number
  created_at: string
}

export type OnboardingData = {
  id: string
  user_id: string
  monthly_income: string
  financial_situation: string
  main_difficulties: string[]
  main_goals: string[]
  created_at: string
}

export type FinancialGoal = {
  id: string
  user_id: string
  goal_type: string
  target_amount: number
  current_amount: number
  deadline: string | null
  status: 'active' | 'completed' | 'cancelled'
  created_at: string
  updated_at: string
}
