"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DollarSign, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cadastroData, setCadastroData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Cadastro realizado com sucesso! Em breve entraremos em contato.");
    setCadastroData({ nome: "", email: "", telefone: "" });
    setLoading(false);
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

            <nav className="hidden md:flex gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                Quiz Financeiro
              </Link>
              <Link
                href="/oferecemos"
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                O que Oferecemos
              </Link>
              <Link
                href="/chat-ia"
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                Chat com IA
              </Link>
              <Link
                href="/cadastro"
                className="px-4 py-2 rounded-lg font-medium bg-[#27ae60] text-white transition-all"
              >
                Cadastro
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              Cadastre-se para receber novidades
            </h1>
            <p className="text-lg text-gray-600">
              Fique por dentro de dicas exclusivas e promoções especiais
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <form onSubmit={handleCadastro} className="space-y-6">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Cadastrando...
                  </>
                ) : (
                  <>
                    Cadastrar
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t-2 border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                Ao se cadastrar, você concorda em receber comunicações do
                MyMoneyIA. Seus dados estão seguros conosco.
              </p>
            </div>

            {/* Benefícios do Cadastro */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-[#1d3557] text-center mb-6">
                O que você ganha ao se cadastrar:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Dicas financeiras exclusivas direto no seu email
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Acesso antecipado a novos recursos e ferramentas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Descontos especiais em planos e produtos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Conteúdos educativos sobre educação financeira
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
