"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2, Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resetMode, setResetMode] = useState(false)
  const [resetSuccess, setResetSuccess] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Buscar usuários cadastrados
      const usuariosStr = localStorage.getItem("usuarios")
      if (!usuariosStr) {
        throw new Error("Nenhum usuário cadastrado encontrado")
      }

      const usuarios = JSON.parse(usuariosStr)
      const usuario = usuarios.find((u: any) => u.email === email && u.senha === password)

      if (!usuario) {
        throw new Error("Email ou senha incorretos")
      }

      // Salvar usuário atual
      localStorage.setItem("usuarioAtual", JSON.stringify(usuario))

      // Se "Lembrar-me" estiver marcado, salvar flag
      if (rememberMe) {
        localStorage.setItem("usuarioLogado", "true")
      }

      // Verificar se já escolheu um plano (pagou)
      const planoEscolhido = localStorage.getItem("planoEscolhido")
      
      if (planoEscolhido) {
        // Já pagou - vai para área restrita
        router.push("/area-restrita")
      } else {
        // Não pagou - vai para resultado/análise
        router.push("/resultado")
      }
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login. Verifique suas credenciais.")
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Simular envio de email
      await new Promise(resolve => setTimeout(resolve, 1500))
      setResetSuccess(true)
    } catch (err: any) {
      setError(err.message || "Erro ao enviar email de recuperação.")
    } finally {
      setLoading(false)
    }
  }

  if (resetMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1d3557] via-[#27ae60] to-[#1d3557] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Recuperar Senha
              </h1>
              <p className="text-gray-600">
                Digite seu email para receber o link de recuperação
              </p>
            </div>

            {resetSuccess ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-gray-700">
                  Email enviado com sucesso! Verifique sua caixa de entrada.
                </p>
                <Button
                  onClick={() => {
                    setResetMode(false)
                    setResetSuccess(false)
                  }}
                  className="w-full bg-[#27ae60] hover:bg-[#229954] text-white"
                >
                  Voltar para o login
                </Button>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#27ae60] hover:bg-[#229954] text-white rounded-xl font-semibold text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar link de recuperação"
                  )}
                </Button>

                <button
                  type="button"
                  onClick={() => setResetMode(false)}
                  className="w-full text-center text-gray-600 hover:text-gray-900 text-sm"
                >
                  Voltar para o login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1d3557] via-[#27ae60] to-[#1d3557] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-gray-600">
              Entre na sua conta MyMoneyIA
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 h-12 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#27ae60] focus:ring-[#27ae60]"
                />
                <span className="text-gray-700">Lembrar-me</span>
              </label>
              
              <button
                type="button"
                onClick={() => setResetMode(true)}
                className="text-[#27ae60] hover:text-[#229954] font-medium"
              >
                Esqueceu a senha?
              </button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#27ae60] hover:bg-[#229954] text-white rounded-xl font-semibold text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Ainda não tem conta?{" "}
              <Link
                href="/cadastro"
                className="text-[#27ae60] hover:text-[#229954] font-semibold"
              >
                Cadastre-se grátis
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-white hover:text-gray-200 text-sm font-medium"
          >
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  )
}
