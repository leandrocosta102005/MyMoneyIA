"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  Target, 
  DollarSign,
  Calendar,
  ArrowRight,
  Loader2,
  Shield,
  Zap,
  Award,
  BookOpen,
  Star,
  Users,
  Clock,
  BarChart
} from "lucide-react";
import Link from "next/link";

interface PlanoRecomendado {
  titulo: string;
  descricao: string;
  problemasIdentificados: string[];
  acoes: string[];
  dicas: string[];
  planoSugerido: "mensal" | "anual" | "vitalicio";
  motivoAssinatura: string;
}

export default function ResultadoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [plano, setPlano] = useState<PlanoRecomendado | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Recuperar respostas do localStorage
        const respostasStr = localStorage.getItem("quizRespostas");
        if (!respostasStr) {
          router.push("/cadastro");
          return;
        }

        const respostas = JSON.parse(respostasStr);
        const planoPersonalizado = gerarPlanoPersonalizado(respostas);
        setPlano(planoPersonalizado);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [router]);

  const gerarPlanoPersonalizado = (respostas: Record<number, string>): PlanoRecomendado => {
    const situacao = respostas[1] || "";
    const objetivo = respostas[2] || "";
    const controle = respostas[3] || "";
    const renda = respostas[4] || "";

    let titulo = "Seu Plano Personalizado MyMoneyIA";
    let descricao = "";
    let problemasIdentificados: string[] = [];
    let acoes: string[] = [];
    let dicas: string[] = [];
    let planoSugerido: "mensal" | "anual" | "vitalicio" = "anual";
    let motivoAssinatura = "";

    // Análise da situação financeira
    if (situacao.includes("dívidas")) {
      problemasIdentificados.push("Você está enfrentando dívidas que estão comprometendo sua saúde financeira");
      titulo = "Plano de Eliminação de Dívidas";
      descricao = "Nossa IA identificou que você precisa de um plano estruturado para sair das dívidas de forma organizada e sustentável.";
      acoes = [
        "Liste todas as suas dívidas com valores e juros",
        "Priorize as dívidas com maiores juros primeiro (método avalanche)",
        "Crie um orçamento realista com foco em pagamento de dívidas",
        "Negocie descontos e prazos com credores",
        "Acompanhe seu progresso semanalmente"
      ];
      dicas = [
        "Corte gastos supérfluos temporariamente",
        "Considere renda extra para acelerar pagamentos",
        "Evite novas dívidas durante o processo",
        "Celebre cada dívida quitada para manter motivação"
      ];
      motivoAssinatura = "Com o MyMoneyIA, você terá uma planilha inteligente que automatiza o rastreamento de dívidas, calcula a melhor estratégia de pagamento e te mantém motivado com visualizações do seu progresso. Nossa IA analisa suas finanças e sugere cortes estratégicos que não comprometem sua qualidade de vida.";
      planoSugerido = "anual";
    } else if (situacao.includes("não sobra nada")) {
      problemasIdentificados.push("O dinheiro acaba antes do fim do mês, criando um ciclo de estresse financeiro constante");
      titulo = "Plano de Economia Automática";
      descricao = "Nossa IA identificou que você precisa implementar o método 'pague-se primeiro' para criar sobras consistentes.";
      acoes = [
        "Defina uma porcentagem fixa para poupar (comece com 5-10%)",
        "Separe o valor de economia assim que receber",
        "Crie um orçamento com o que sobrou",
        "Automatize transferências para poupança",
        "Aumente 1% a cada mês"
      ];
      dicas = [
        "Trate a economia como uma conta obrigatória",
        "Use a regra 50/30/20 (necessidades/desejos/economia)",
        "Guarde aumentos salariais e bonificações",
        "Comemore marcos de economia alcançados"
      ];
      motivoAssinatura = "Com o MyMoneyIA, você configura metas de economia automáticas e a IA te ajuda a encontrar oportunidades de corte de gastos sem sacrificar o que realmente importa. Nosso sistema de gamificação te mantém motivado a poupar cada vez mais.";
      planoSugerido = "mensal";
    } else if (situacao.includes("não tenho controle")) {
      problemasIdentificados.push("Falta de controle sobre os gastos está impedindo você de alcançar seus objetivos financeiros");
      titulo = "Plano de Controle Financeiro Total";
      descricao = "Nossa IA detectou que você precisa de um sistema simples e eficaz para controlar seus gastos.";
      acoes = [
        "Registre TODOS os gastos por 30 dias",
        "Categorize automaticamente com nossa planilha IA",
        "Identifique os 3 maiores vazamentos de dinheiro",
        "Estabeleça limites por categoria",
        "Revise semanalmente seus gastos"
      ];
      dicas = [
        "Use notificações para lembrar de registrar gastos",
        "Analise padrões de consumo por dia da semana",
        "Identifique gastos emocionais vs necessários",
        "Crie alertas quando ultrapassar limites"
      ];
      motivoAssinatura = "O MyMoneyIA categoriza automaticamente seus gastos usando inteligência artificial, identifica padrões ocultos e te mostra exatamente para onde seu dinheiro está indo. Você terá dashboards visuais que transformam números confusos em insights claros e acionáveis.";
      planoSugerido = "anual";
    } else {
      problemasIdentificados.push("Você já tem uma base financeira, mas pode otimizar ainda mais seus resultados");
      titulo = "Plano de Otimização Financeira";
      descricao = "Nossa IA identificou que você está no caminho certo e pode acelerar seus resultados com estratégias avançadas.";
      acoes = [
        "Revise e otimize seu orçamento atual",
        "Identifique oportunidades de investimento",
        "Automatize suas economias e investimentos",
        "Defina metas de longo prazo mais ambiciosas",
        "Diversifique suas fontes de renda"
      ];
      dicas = [
        "Aumente gradualmente sua taxa de poupança",
        "Estude sobre investimentos de baixo risco",
        "Crie múltiplas fontes de renda passiva",
        "Revise seu plano trimestralmente"
      ];
      motivoAssinatura = "O MyMoneyIA oferece análises avançadas e recomendações personalizadas para quem já tem controle financeiro e quer ir além. Nossa IA identifica oportunidades de otimização que você pode estar perdendo e sugere estratégias para acelerar seu crescimento patrimonial.";
      planoSugerido = "vitalicio";
    }

    // Análise do controle
    if (controle.includes("Não controlo")) {
      problemasIdentificados.push("Falta de visibilidade sobre seus gastos está impedindo você de tomar decisões financeiras conscientes");
    } else if (controle.includes("Tento controlar mentalmente")) {
      problemasIdentificados.push("Controle mental não é suficiente - você precisa de um sistema confiável");
    } else if (controle.includes("planilhas")) {
      problemasIdentificados.push("Planilhas manuais são trabalhosas e difíceis de manter consistentemente");
    }

    // Análise do objetivo
    if (objetivo.includes("Sair das dívidas")) {
      planoSugerido = "anual";
    } else if (objetivo.includes("reserva de emergência")) {
      planoSugerido = "vitalicio";
    } else if (objetivo.includes("Investir")) {
      planoSugerido = "vitalicio";
    }

    // Ajuste baseado na renda
    if (renda.includes("Até R$ 2.000") || renda.includes("R$ 2.001 a R$ 5.000")) {
      planoSugerido = "mensal";
    } else if (renda.includes("Acima de R$ 10.000")) {
      planoSugerido = "vitalicio";
    }

    return {
      titulo,
      descricao,
      problemasIdentificados,
      acoes,
      dicas,
      planoSugerido,
      motivoAssinatura
    };
  };

  const getPlanoInfo = (tipo: "mensal" | "anual" | "vitalicio") => {
    switch (tipo) {
      case "mensal":
        return {
          nome: "Plano Básico",
          preco: "R$ 27",
          periodo: "/mês",
          economia: null,
          cor: "blue",
          beneficios: [
            "Planilha Inteligente MyMoneyIA",
            "Categorização automática com IA",
            "Dashboard completo de gastos",
            "Metas personalizadas",
            "Chat com IA 24/7",
            "Suporte por email"
          ],
          detalhes: [
            "Controle completo de receitas e despesas",
            "Gráficos e relatórios visuais",
            "Alertas de gastos excessivos",
            "Sincronização em nuvem"
          ]
        };
      case "anual":
        return {
          nome: "Plano Premium",
          preco: "R$ 177",
          periodo: "/ano",
          economia: "Economize R$ 147 + E-book Grátis",
          cor: "green",
          beneficios: [
            "Tudo do Plano Básico",
            "E-book: 50 Dicas Financeiras (GRÁTIS)",
            "Análise mensal detalhada por IA",
            "Recomendações personalizadas",
            "Biblioteca de prompts financeiros",
            "Suporte prioritário",
            "Atualizações vitalícias",
            "Planejamento de investimentos"
          ],
          detalhes: [
            "Previsões financeiras com IA",
            "Simulador de cenários",
            "Comparativo mensal de performance",
            "Relatórios avançados"
          ]
        };
      case "vitalicio":
        return {
          nome: "Plano Elite",
          preco: "R$ 347",
          periodo: "pagamento único",
          economia: "Economize R$ 300+ E-book Grátis",
          cor: "purple",
          beneficios: [
            "Tudo do Plano Premium",
            "E-book: 50 Dicas Financeiras (GRÁTIS)",
            "Acesso vitalício sem mensalidades",
            "Consultoria VIP mensal com IA especialista",
            "Novos recursos em primeira mão",
            "Garantia estendida",
            "Suporte VIP 24/7",
            "Análises trimestrais personalizadas"
          ],
          detalhes: [
            "Sessões mensais com IA financeira avançada",
            "Estratégias avançadas de investimento",
            "Planejamento patrimonial completo",
            "Acesso a webinars exclusivos"
          ]
        };
    }
  };

  const handleEscolherPlano = (tipo: "mensal" | "anual" | "vitalicio") => {
    // Salvar plano escolhido
    localStorage.setItem("planoEscolhido", tipo);
    
    // Redirecionar para área restrita (simulando pós-pagamento)
    router.push("/area-restrita");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1d3557] via-[#27ae60] to-[#1d3557] flex items-center justify-center">
        <div className="text-center text-white">
          <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin" />
          <p className="text-xl font-semibold">Analisando suas respostas com IA...</p>
          <p className="text-white/80 mt-2">Criando seu plano personalizado</p>
        </div>
      </div>
    );
  }

  if (!plano) {
    return null;
  }

  const planoInfo = getPlanoInfo(plano.planoSugerido);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#27ae60] transition-colors">
          <DollarSign className="w-6 h-6" />
          <span className="font-semibold">MyMoneyIA</span>
        </Link>
      </header>

      <div className="max-w-5xl mx-auto">
        {/* Header de Sucesso */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#27ae60] rounded-full mb-6 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mb-4">
            Análise Completa!
          </h1>
          <p className="text-xl text-gray-600">
            Nossa IA analisou suas respostas e identificou seus principais desafios
          </p>
        </div>

        {/* Problemas Identificados */}
        {plano.problemasIdentificados.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl shadow-lg p-8 sm:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-red-900">Problemas Identificados</h2>
            </div>
            <div className="space-y-4">
              {plano.problemasIdentificados.map((problema, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 pt-1 leading-relaxed">{problema}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Plano Personalizado */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#27ae60]" />
            <h2 className="text-3xl font-bold text-[#1d3557]">{plano.titulo}</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {plano.descricao}
          </p>

          {/* Ações Recomendadas */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1d3557] mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-[#27ae60]" />
              Ações Imediatas
            </h3>
            <div className="space-y-3">
              {plano.acoes.map((acao, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-[#27ae60]/5 rounded-xl">
                  <div className="w-8 h-8 bg-[#27ae60] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 pt-1">{acao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dicas Extras */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1d3557] mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#27ae60]" />
              Dicas Importantes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plano.dicas.map((dica, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border-2 border-[#27ae60]/20 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{dica}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Por que assinar */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-3xl shadow-lg p-8 sm:p-12 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-900">Por que você precisa do MyMoneyIA?</h2>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            {plano.motivoAssinatura}
          </p>
          <div className="bg-white/50 rounded-2xl p-6 border-2 border-purple-200">
            <div className="flex items-start gap-4">
              <BookOpen className="w-12 h-12 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  BÔNUS: E-book de Dicas Financeiras
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Os planos Premium e Elite incluem nosso e-book exclusivo com 50 dicas práticas para transformar sua vida financeira. Valor: R$ 47 - <span className="font-bold text-purple-600">GRÁTIS</span> na sua assinatura!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação de Planos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1d3557] text-center mb-8">
            Escolha o Plano Ideal Para Você
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["mensal", "anual", "vitalicio"] as const).map((tipo) => {
              const info = getPlanoInfo(tipo);
              const isRecomendado = tipo === plano.planoSugerido;
              
              return (
                <div 
                  key={tipo} 
                  className={`bg-white rounded-2xl shadow-xl p-6 border-2 transition-all hover:scale-105 ${
                    isRecomendado 
                      ? "border-[#27ae60] ring-4 ring-[#27ae60]/20" 
                      : "border-gray-200"
                  }`}
                >
                  {isRecomendado && (
                    <div className="bg-[#27ae60] text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4">
                      ⭐ RECOMENDADO PARA VOCÊ
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-[#1d3557] mb-2 text-center">
                    {info.nome}
                  </h3>
                  
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-[#27ae60]">{info.preco}</span>
                      <span className="text-sm text-gray-600">{info.periodo}</span>
                    </div>
                    {info.economia && (
                      <p className="text-sm text-[#27ae60] font-semibold mt-2">{info.economia}</p>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    {info.beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{beneficio}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleEscolherPlano(tipo)}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      isRecomendado
                        ? "bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white hover:shadow-xl"
                        : "bg-gray-100 text-[#1d3557] hover:bg-[#27ae60] hover:text-white"
                    }`}
                  >
                    Escolher Plano
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl p-8 text-white text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Garantia de 7 Dias</h3>
          <p className="text-white/90">
            Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </div>
  );
}
