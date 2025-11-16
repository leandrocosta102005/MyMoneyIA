"use client";

import {
  DollarSign,
  Sparkles,
  Bot,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function OferecemosPage() {
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
                className="px-4 py-2 rounded-lg font-medium bg-[#27ae60] text-white transition-all"
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
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                Cadastro
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mb-4">
              O que o MyMoneyIA oferece?
            </h1>
            <p className="text-xl text-gray-600">
              Soluções completas para transformar sua vida financeira
            </p>
          </div>

          {/* Recursos Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#27ae60]/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#27ae60]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d3557] mb-4">
                Planilha Inteligente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Planilha automatizada com IA que categoriza gastos, identifica
                padrões e sugere melhorias personalizadas para seu perfil.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#27ae60]/10 rounded-full flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-[#27ae60]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d3557] mb-4">
                Assistente IA 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chat inteligente que responde suas dúvidas financeiras, oferece
                conselhos personalizados e te guia em decisões importantes.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#27ae60]/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#27ae60]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d3557] mb-4">
                Análises Detalhadas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Relatórios mensais com insights profundos sobre seus hábitos,
                oportunidades de economia e progresso em direção às metas.
              </p>
            </div>
          </div>

          {/* E-book Destaque */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-2xl p-8 sm:p-12 mb-16 border-2 border-purple-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-xl flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  <Award size={16} />
                  LANÇAMENTO ESPECIAL
                </div>
                <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
                  E-book: 50 Dicas Financeiras que Vão Mudar Sua Vida
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Guia completo com estratégias práticas para economizar,
                  investir e conquistar sua liberdade financeira. Conteúdo
                  exclusivo desenvolvido por especialistas e validado por IA.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-purple-600">
                      R$ 47
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      R$ 97
                    </span>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    50% OFF
                  </span>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      "https://pay.kiwify.com.br/seu-link-ebook",
                      "_blank"
                    )
                  }
                  className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
                >
                  Comprar E-book Agora
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Planos */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
              Escolha seu plano
            </h2>
            <p className="text-lg text-gray-600">
              Todos os planos agora incluem acesso ao E-book de Dicas
              Financeiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#27ae60] transition-all">
              <h3 className="text-2xl font-bold text-[#1d3557] mb-2">
                Plano Básico
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#27ae60]">
                  R$ 27
                </span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Planilha Inteligente MyMoneyIA
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    E-book de Dicas Financeiras
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Categorização automática com IA
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dashboard completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Suporte por email</span>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open(
                    "https://pay.kiwify.com.br/seu-link-mensal",
                    "_blank"
                  )
                }
                className="w-full bg-gray-100 text-[#1d3557] py-3 rounded-xl font-bold hover:bg-[#27ae60] hover:text-white transition-all"
              >
                Começar Agora
              </button>
            </div>

            {/* Plano Anual - DESTAQUE */}
            <div className="bg-gradient-to-br from-[#27ae60] to-[#1d3557] rounded-2xl shadow-2xl p-8 text-white relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1d3557] px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">R$ 177</span>
                <span className="text-white/80">/ano</span>
              </div>
              <p className="text-[#a8e6cf] font-semibold mb-6">
                Economize R$ 147
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0 mt-0.5" />
                  <span>Tudo do Plano Básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0 mt-0.5" />
                  <span>E-book de Dicas Financeiras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0 mt-0.5" />
                  <span>Análise mensal detalhada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0 mt-0.5" />
                  <span>Recomendações personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0 mt-0.5" />
                  <span>Biblioteca de prompts financeiros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0 mt-0.5" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open(
                    "https://pay.kiwify.com.br/seu-link-anual",
                    "_blank"
                  )
                }
                className="w-full bg-white text-[#1d3557] py-3 rounded-xl font-bold hover:bg-gray-100 transition-all"
              >
                Assinar Premium
              </button>
            </div>

            {/* Plano Vitalício */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#27ae60] transition-all">
              <h3 className="text-2xl font-bold text-[#1d3557] mb-2">
                Plano Elite
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-[#27ae60]">
                  R$ 347
                </span>
              </div>
              <p className="text-[#27ae60] font-semibold mb-6">
                Pagamento único
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tudo do Plano Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    E-book de Dicas Financeiras
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Acesso vitalício</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Consultoria financeira mensal
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comunidade exclusiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Novos recursos em primeira mão
                  </span>
                </li>
              </ul>
              <button
                onClick={() =>
                  window.open(
                    "https://pay.kiwify.com.br/seu-link-vitalicio",
                    "_blank"
                  )
                }
                className="w-full bg-gray-100 text-[#1d3557] py-3 rounded-xl font-bold hover:bg-[#27ae60] hover:text-white transition-all"
              >
                Garantir Acesso Vitalício
              </button>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar suas finanças?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Junte-se a milhares de pessoas que já estão no controle do seu
              dinheiro
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1d3557] rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
            >
              Fazer Quiz Gratuito
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
