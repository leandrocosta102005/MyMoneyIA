"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Coins, Loader2, AlertCircle } from 'lucide-react';

export default function CadastroPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [cadastroData, setCadastroData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [lembrarMe, setLembrarMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Buscar usuários do localStorage
      const usuariosStr = localStorage.getItem('usuarios');
      const usuarios = usuariosStr ? JSON.parse(usuariosStr) : [];

      if (isLogin) {
        // LOGIN: Buscar usuário no localStorage
        const usuario = usuarios.find(
          (u: any) => u.email === cadastroData.email && u.senha === cadastroData.senha
        );

        if (!usuario) {
          throw new Error('Email ou senha incorretos. Verifique suas credenciais.');
        }

        // Salvar usuário logado
        localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
        
        if (lembrarMe) {
          localStorage.setItem('lembrarMe', 'true');
        }

        setError('✅ Login realizado com sucesso! Redirecionando...');
        
        // Redirecionar baseado no status do usuário
        setTimeout(() => {
          if (usuario.plano_atual && usuario.plano_atual !== 'gratuito') {
            // Tem plano pago -> área restrita
            router.push('/area-restrita');
          } else {
            // Não tem plano -> página de planos
            router.push('/planos');
          }
        }, 1000);
      } else {
        // CADASTRO: Validações básicas
        if (cadastroData.senha.length < 6) {
          throw new Error('A senha deve ter pelo menos 6 caracteres.');
        }

        if (!cadastroData.nome.trim()) {
          throw new Error('Por favor, preencha seu nome completo.');
        }

        // Verificar se email já existe
        const emailExiste = usuarios.find((u: any) => u.email === cadastroData.email);
        if (emailExiste) {
          throw new Error('Este email já está cadastrado. Faça login ou use outro email.');
        }

        // Criar novo usuário
        const novoUsuario = {
          id: Date.now().toString(),
          nome: cadastroData.nome,
          email: cadastroData.email,
          senha: cadastroData.senha,
          plano_atual: 'gratuito',
          quiz_completo: false,
          created_at: new Date().toISOString()
        };

        // Adicionar aos usuários
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Salvar como usuário atual
        localStorage.setItem('usuarioAtual', JSON.stringify(novoUsuario));

        setError('✅ Cadastro realizado com sucesso! Redirecionando para o quiz...');
        setTimeout(() => {
          router.push('/quiz');
        }, 1500);
      }
    } catch (error: any) {
      console.error('Erro de autenticação:', error);
      setError(error.message || 'Erro ao processar solicitação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Coins className="w-8 h-8 text-[#27ae60]" />
              <span className="text-2xl font-bold text-[#1d3557]">
                MyMoneyIA
              </span>
            </Link>

            <Link
              href="/"
              className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
            </h1>
            <p className="text-lg text-gray-600">
              {isLogin
                ? "Entre para acessar sua análise financeira"
                : "Cadastre-se para começar seu quiz financeiro personalizado"}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            {/* Toggle Login/Cadastro */}
            <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-2xl">
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  !isLogin
                    ? "bg-white text-[#27ae60] shadow-md"
                    : "text-gray-600"
                }`}
              >
                Cadastro
              </button>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  isLogin
                    ? "bg-white text-[#27ae60] shadow-md"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>
            </div>

            {/* Mensagem de erro/sucesso */}
            {error && (
              <div className={`mb-6 p-4 border-2 rounded-2xl flex items-start gap-3 ${
                error.includes('✅') 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  error.includes('✅') ? 'text-green-600' : 'text-red-600'
                }`} />
                <p className={`text-sm ${
                  error.includes('✅') ? 'text-green-800' : 'text-red-800'
                }`}>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={cadastroData.nome}
                    onChange={(e) =>
                      setCadastroData({ ...cadastroData, nome: e.target.value })
                    }
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#27ae60] text-gray-800"
                    placeholder="Seu nome"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={cadastroData.email}
                  onChange={(e) =>
                    setCadastroData({ ...cadastroData, email: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#27ae60] text-gray-800"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={cadastroData.senha}
                  onChange={(e) =>
                    setCadastroData({ ...cadastroData, senha: e.target.value })
                  }
                  required
                  minLength={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#27ae60] text-gray-800"
                  placeholder="••••••••"
                />
                {!isLogin && (
                  <p className="text-xs text-gray-500 mt-1">Mínimo de 6 caracteres</p>
                )}
              </div>

              {/* Checkbox Lembrar-me */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="lembrar-me"
                  checked={lembrarMe}
                  onChange={(e) => setLembrarMe(e.target.checked)}
                  className="w-5 h-5 text-[#27ae60] border-gray-300 rounded focus:ring-[#27ae60]"
                />
                <label htmlFor="lembrar-me" className="text-sm text-gray-700 cursor-pointer">
                  Manter-me conectado
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {isLogin ? "Entrando..." : "Cadastrando..."}
                  </>
                ) : (
                  <>
                    {isLogin ? "Entrar" : "Cadastrar e Começar Quiz"}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t-2 border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                {isLogin ? (
                  <>
                    Não tem uma conta?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-[#27ae60] font-semibold hover:underline"
                    >
                      Cadastre-se aqui
                    </button>
                  </>
                ) : (
                  <>
                    Já tem uma conta?{" "}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-[#27ae60] font-semibold hover:underline"
                    >
                      Faça login aqui
                    </button>
                  </>
                )}
              </p>
            </div>

            {/* Benefícios do Cadastro */}
            {!isLogin && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-[#1d3557] text-center mb-6">
                  O que você ganha ao se cadastrar:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Quiz personalizado para identificar seu perfil financeiro
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Plano financeiro sob medida criado por IA
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Acesso ao chat com IA para tirar dúvidas 24/7
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Descontos especiais em planos e e-book exclusivo
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
