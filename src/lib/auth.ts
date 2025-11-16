import { supabase } from './supabase'

// Tipos para autenticação
export type SignUpData = {
  email: string
  password: string
  fullName: string
}

export type SignInData = {
  email: string
  password: string
}

// Função para cadastro de usuário
export async function signUp({ email, password, fullName }: SignUpData) {
  try {
    // Criar conta - com confirmação de email desabilitada no Supabase, 
    // o usuário será criado e logado automaticamente
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      throw error
    }

    // Retorna dados incluindo sessão (que deve existir se confirmação estiver desabilitada)
    return data
  } catch (error: any) {
    console.error('Erro no cadastro:', error)
    throw new Error(error.message || 'Erro ao criar conta')
  }
}

// Função para login
export async function signIn({ email, password }: SignInData) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    return data
  } catch (error: any) {
    console.error('Erro no login:', error)
    throw new Error(error.message || 'Erro ao fazer login')
  }
}

// Função para logout
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }
  } catch (error: any) {
    console.error('Erro no logout:', error)
    throw new Error(error.message || 'Erro ao fazer logout')
  }
}

// Função para obter usuário atual
export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      return null
    }

    return user
  } catch (error) {
    console.error('Erro ao obter usuário:', error)
    return null
  }
}

// Função para verificar se usuário está autenticado
export async function isAuthenticated() {
  try {
    const { data: { session } } = await supabase.auth.getSession()
    return !!session
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error)
    return false
  }
}

// Função para resetar senha
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })

    if (error) {
      throw error
    }
  } catch (error: any) {
    console.error('Erro ao resetar senha:', error)
    throw new Error(error.message || 'Erro ao resetar senha')
  }
}

// Função para atualizar senha
export async function updatePassword(newPassword: string) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      throw error
    }
  } catch (error: any) {
    console.error('Erro ao atualizar senha:', error)
    throw new Error(error.message || 'Erro ao atualizar senha')
  }
}

// Função para reenviar email de confirmação
export async function resendConfirmationEmail(email: string) {
  try {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email,
    })

    if (error) {
      throw error
    }
  } catch (error: any) {
    console.error('Erro ao reenviar email:', error)
    throw new Error(error.message || 'Erro ao reenviar email de confirmação')
  }
}

// Função para salvar dados do onboarding
export async function saveOnboardingData(data: {
  userId: string
  monthlyIncome: string
  financialSituation: string
  mainDifficulties: string[]
  mainGoals: string[]
}) {
  try {
    const { error } = await supabase
      .from('onboarding_data')
      .insert({
        user_id: data.userId,
        monthly_income: data.monthlyIncome,
        financial_situation: data.financialSituation,
        main_difficulties: data.mainDifficulties,
        main_goals: data.mainGoals,
      })

    if (error) {
      throw error
    }
  } catch (error: any) {
    console.error('Erro ao salvar dados do onboarding:', error)
    throw new Error(error.message || 'Erro ao salvar dados')
  }
}

// Função para criar assinatura
export async function createSubscription(data: {
  userId: string
  planType: 'monthly' | 'annual' | 'lifetime'
  amount: number
}) {
  try {
    const endDate = data.planType === 'lifetime' 
      ? null 
      : data.planType === 'annual'
      ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

    const { error } = await supabase
      .from('subscriptions')
      .insert({
        user_id: data.userId,
        plan_type: data.planType,
        amount: data.amount,
        end_date: endDate,
        status: 'active',
      })

    if (error) {
      throw error
    }
  } catch (error: any) {
    console.error('Erro ao criar assinatura:', error)
    throw new Error(error.message || 'Erro ao criar assinatura')
  }
}

// Função para obter assinatura do usuário
export async function getUserSubscription(userId: string) {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    return data
  } catch (error: any) {
    console.error('Erro ao obter assinatura:', error)
    return null
  }
}

// Função para obter dados do onboarding
export async function getOnboardingData(userId: string) {
  try {
    const { data, error } = await supabase
      .from('onboarding_data')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    return data
  } catch (error: any) {
    console.error('Erro ao obter dados do onboarding:', error)
    return null
  }
}
