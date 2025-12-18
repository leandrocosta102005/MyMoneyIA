"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, Loader2, Crown, Star, Zap, AlertCircle } from 'lucide-react';

export default function PlanosPage() {
  const [loading, setLoading] = useState(false);
  const [resumoQuiz, setResumoQuiz] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // Verificar se usuário está logado
    const usuarioAtual = localStorage.getItem("usuarioAtual");
    if (!usuarioAtual) {
      router.push("/cadastro");
      return;
    }

    const usuario = JSON.parse(usuarioAtual);

    // Se já tem plano pago, redireciona para área restrita
    if (usuario.plano_atual && usuario.plano_atual !== 'gratuito') {
      router.push('/area-restrita');
      return;
    }

    // Gerar resumo baseado nas respostas do quiz
    const respostasStr = localStorage.getItem("quizRespostas");
    if (respostasStr) {
      const respostas = JSON.parse(respostasStr);
      gerarResumo(respostas);
    }
  }, [router]);

  const gerarResumo = (respostas: Record<number, string>) => {
    let problemas: string[] = [];

    // Analisar respostas e identificar problemas
    if (respostas[1]?.includes("dívidas")) {
      problemas.push("Você está enfrentando dificuldades com dívidas");
    } else if (respostas[1]?.includes("não sobra nada")) {
      problemas.push("Seu orçamento está apertado e não há margem para poupança");
    } else if (respostas[1]?.includes("não tenho controle")) {
      problemas.push("Falta controle sobre suas finanças pessoais");
    }

    if (respostas[3]?.includes("Não controlo")) {
      problemas.push("Você não tem visibilidade de para onde vai seu dinheiro");
    } else if (respostas[3]?.includes("mentalmente")) {
      problemas.push("Seu método de controle financeiro não é eficiente");
    }

    if (problemas.length === 0) {
      problemas.push("Você tem uma boa base financeira, mas pode otimizar ainda mais");
    }

    setResumoQuiz(problemas.join(". ") + ".");
  };

  const handleEscolherPlano = async (tipo: "mensal" | "anual" | "vitalicio") => {
    setLoading(true);
    try {
      const usuarioAtual = localStorage.getItem("usuarioAtual");
      if (!usuarioAtual) {
        router.push('/cadastro');
        return;
      }

      const usuario = JSON.parse(usuarioAtual);
      
      // Atualizar plano do usuário
      usuario.plano_atual = tipo;
      usuario.data_assinatura = new Date().toISOString();
      
      // Salvar usuário atualizado
      localStorage.setItem("usuarioAtual", JSON.stringify(usuario));
      
      // Atualizar na lista de usuários
      const usuariosStr = localStorage.getItem("usuarios");
      if (usuariosStr) {
        const usuarios = JSON.parse(usuariosStr);
        const index = usuarios.findIndex((u: any) => u.email === usuario.email);
        if (index !== -1) {
          usuarios[index] = usuario;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
      }

      // Simular processamento de pagamento
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Redirecionar para área restrita (dashboard)
      router.push("/area-restrita");
    } catch (err) {
      console.error('Erro:', err);
      alert('Erro inesperado. Tente novamente.');
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
        <div className="max-w-6xl mx-auto">
          {/* Resumo do Quiz */}
          {resumoQuiz && (
            <div className="mb-12 bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#27ae60]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-[#27ae60]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1d3557] mb-3">
                    Análise do Seu Perfil Financeiro
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {resumoQuiz}
                  </p>
                  <p className="text-gray-600 mt-4">
                    Escolha um plano abaixo para receber seu plano financeiro personalizado criado por IA e começar a transformar sua vida financeira.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              Escolha Seu Plano Ideal
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Todos os planos incluem acesso completo à plataforma, chat com IA 24/7 e plano financeiro personalizado.
            </p>
          </div>

          {/* Planos */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Plano Mensal */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">Plano Mensal</h3>
                <div className="text-4xl font-bold text-[#27ae60] mb-1">R$ 29,90</div>
                <div className="text-gray-500">por mês</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Plano financeiro personalizado por IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Chat com IA 24/7 para dúvidas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Controle de gastos e receitas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Relatórios mensais detalhados</span>
                </li>
              </ul>

              <button
                onClick={() => handleEscolherPlano('mensal')}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Escolher Plano
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>

            {/* Plano Anual - Mais Popular */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative border-4 border-[#27ae60] hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#27ae60] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MAIS POPULAR
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">Plano Anual</h3>
                <div className="text-4xl font-bold text-[#27ae60] mb-1">R$ 299,90</div>
                <div className="text-gray-500">por ano</div>
                <div className="text-sm text-green-600 font-semibold mt-2 bg-green-50 px-3 py-1 rounded-full inline-block">
                  Economize R$ 59,00
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Tudo do plano mensal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">E-book exclusivo de finanças</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Consultoria personalizada mensal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Acesso antecipado a novos recursos</span>
                </li>
              </ul>

              <button
                onClick={() => handleEscolherPlano('anual')}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Escolher Plano
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>

            {/* Plano Vitalício */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative hover:scale-105 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">Plano Vitalício</h3>
                <div className="text-4xl font-bold text-[#27ae60] mb-1">R$ 697,00</div>
                <div className="text-gray-500">pagamento único</div>
                <div className="text-sm text-purple-600 font-semibold mt-2 bg-purple-50 px-3 py-1 rounded-full inline-block">
                  Acesso eterno
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">Tudo dos outros planos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Atualizações vitalícias gratuitas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Curso completo de educação financeira</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Suporte VIP dedicado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                  <span className="text-gray-700">Comunidade exclusiva de membros</span>
                </li>
              </ul>

              <button
                onClick={() => handleEscolherPlano('vitalicio')}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Escolher Plano
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Garantia */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <CheckCircle className="w-12 h-12 text-[#27ae60] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1d3557] mb-3">
                Garantia de 30 dias
              </h3>
              <p className="text-gray-600 text-lg">
                Se você não ficar satisfeito com seu plano financeiro personalizado,
                devolvemos 100% do seu dinheiro em até 30 dias. Sem perguntas, sem complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
