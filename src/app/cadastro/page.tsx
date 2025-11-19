"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DollarSign, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [lembrarMe, setLembrarMe] = useState(false);
  const [cadastroData, setCadastroData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  // Verificar se usuário já está logado ao carregar
  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado === "true") {
      const usuarioAtual = localStorage.getItem("usuarioAtual");
      if (usuarioAtual) {
        const usuario = JSON.parse(usuarioAtual);
        const quizCompleto = localStorage.getItem(`quiz_completo_${usuario.email}`);
        
        if (quizCompleto === "true") {
          // Se já fez o quiz, vai para resultado
          router.push("/resultado");
        } else {
          // Se não fez quiz, vai para o quiz
          router.push("/quiz");
        }
      }
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular processamento (1 segundo)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Salvar dados localmente
    if (!isLogin) {
      // CADASTRO: salvar novo usuário
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      
      // Verificar se email já existe
      const emailExiste = usuarios.find((u: any) => u.email === cadastroData.email);
      if (emailExiste) {
        alert("Este e-mail já está cadastrado! Faça login.");
        setLoading(false);
        setIsLogin(true);
        return;
      }

      const novoUsuario = {
        nome: cadastroData.nome,
        email: cadastroData.email,
        senha: cadastroData.senha,
        telefone: cadastroData.telefone,
        dataCadastro: new Date().toISOString(),
      };

      usuarios.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      localStorage.setItem("usuarioAtual", JSON.stringify(novoUsuario));
      
      // Marcar como logado se "lembrar-me" estiver ativo
      if (lembrarMe) {
        localStorage.setItem("usuarioLogado", "true");
      }

      setLoading(false);
      
      // Redirecionar para o quiz (primeira vez)
      router.push("/quiz");
    } else {
      // LOGIN: verificar credenciais
      const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
      const usuarioEncontrado = usuarios.find(
        (u: any) => u.email === cadastroData.email && u.senha === cadastroData.senha
      );
      
      if (usuarioEncontrado) {
        localStorage.setItem("usuarioAtual", JSON.stringify(usuarioEncontrado));
        
        // Marcar como logado se "lembrar-me" estiver ativo
        if (lembrarMe) {
          localStorage.setItem("usuarioLogado", "true");
        }

        setLoading(false);

        // Verificar se já completou o quiz
        const quizCompleto = localStorage.getItem(`quiz_completo_${usuarioEncontrado.email}`);
        
        if (quizCompleto === "true") {
          // Se já fez o quiz, vai direto para resultado
          router.push("/resultado");
        } else {
          // Se não fez quiz ainda, vai para o quiz
          router.push("/quiz");
        }
      } else {
        alert("E-mail ou senha incorretos!");
        setLoading(false);
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-[#27ae60]" />
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
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#27ae60] text-gray-800"
                  placeholder="••••••••"
                />
              </div>

              {/* Campo telefone REMOVIDO do login, apenas no cadastro */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    value={cadastroData.telefone}
                    onChange={(e) =>
                      setCadastroData({
                        ...cadastroData,
                        telefone: e.target.value,
                      })
                    }
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#27ae60] text-gray-800"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              )}

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
                  Lembrar-me (não precisar fazer login novamente)
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
