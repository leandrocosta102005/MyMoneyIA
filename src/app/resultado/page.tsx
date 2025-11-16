"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  BookOpen
} from "lucide-react";

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
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [plano, setPlano] = useState<PlanoRecomendado | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const renda = searchParams.get('renda') || '';
        const tempo = searchParams.get('tempo') || '';
        const dificuldades = searchParams.get('dificuldades')?.split(',') || [];
        const objetivo = searchParams.get('objetivo') || '';

        const planoPersonalizado = gerarPlanoPersonalizado({
          renda,
          tempo,
          dificuldades,
          objetivo
        });
        setPlano(planoPersonalizado);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchParams]);

  const gerarPlanoPersonalizado = (data: any): PlanoRecomendado => {
    const { renda, tempo, dificuldades, objetivo } = data;

    let titulo = "Seu Plano Personalizado MyMoneyIA";
    let descricao = "";
    let problemasIdentificados: string[] = [];
    let acoes: string[] = [];
    let dicas: string[] = [];
    let planoSugerido: "mensal" | "anual" | "vitalicio" = "anual";
    let motivoAssinatura = "";

    if (dificuldades.includes("dividas")) {
      problemasIdentificados.push("Você está enfrentando dívidas que estão comprometendo sua saúde financeira");
    }
    if (dificuldades.includes("nao-sei-onde-gasto")) {
      problemasIdentificados.push("Falta de visibilidade sobre seus gastos está impedindo você de tomar decisões financeiras conscientes");
    }
    if (dificuldades.includes("nao-sobra")) {
      problemasIdentificados.push("O dinheiro acaba antes do fim do mês, criando um ciclo de estresse financeiro constante");
    }
    if (dificuldades.includes("sem-controle")) {
      problemasIdentificados.push("Compras por impulso estão sabotando seus objetivos financeiros de longo prazo");
    }
    if (dificuldades.includes("planilhas-complicadas")) {
      problemasIdentificados.push("Ferramentas complexas estão te impedindo de manter uma organização financeira consistente");
    }
    if (dificuldades.includes("sem-metas")) {
      problemasIdentificados.push("Sem metas claras, você está navegando sem direção em sua vida financeira");
    }

    if (dificuldades.includes("dividas")) {
      titulo = "Plano de Eliminação de Dívidas";
      descricao = "Nossa IA identificou que você precisa de um plano estruturado para sair das dívidas de forma organizada e sustentável.";
      acoes = [
        "Liste todas as suas dívidas com valores e juros",
        "Priorize as dívidas com maiores juros primeiro",
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
    } else if (dificuldades.includes("nao-sei-onde-gasto")) {
      titulo = "Plano de Clareza Financeira Total";
      descricao = "Nossa IA detectou que você precisa de visibilidade completa dos seus gastos para identificar vazamentos financeiros.";
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
    } else if (dificuldades.includes("nao-sobra")) {
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
    } else if (dificuldades.includes("sem-controle")) {
      titulo = "Plano de Controle de Impulsos";
      descricao = "Nossa IA detectou que você precisa de barreiras inteligentes para desenvolver consciência financeira.";
      acoes = [
        "Implemente a regra das 24 horas para compras não essenciais",
        "Remova cartões salvos de sites de compra",
        "Crie uma lista de desejos com prioridades",
        "Estabeleça um valor mensal para 'gastos livres'",
        "Identifique gatilhos emocionais de compra"
      ];
      dicas = [
        "Pergunte-se: 'Preciso ou quero?' antes de comprar",
        "Evite shopping e sites de compra quando estressado",
        "Use dinheiro físico para gastos variáveis",
        "Recompense-se com experiências, não produtos"
      ];
      motivoAssinatura = "O MyMoneyIA te envia alertas inteligentes antes de você ultrapassar seus limites, analisa seus padrões de compra impulsiva e sugere alternativas saudáveis. Nossa IA aprende com seus comportamentos e te ajuda a criar hábitos financeiros sustentáveis.";
    } else {
      titulo = "Plano de Organização Financeira Completa";
      descricao = "Nossa IA criou um sistema simples e sustentável para estruturar suas finanças do zero.";
      acoes = [
        "Configure sua planilha MyMoneyIA personalizada",
        "Registre sua situação financeira atual",
        "Defina metas SMART (específicas, mensuráveis, alcançáveis)",
        "Crie categorias de gastos que façam sentido para você",
        "Estabeleça uma rotina semanal de revisão"
      ];
      dicas = [
        "Comece simples e aumente complexidade gradualmente",
        "Seja consistente, não perfeito",
        "Ajuste o plano conforme aprende sobre seus hábitos",
        "Compartilhe metas com alguém para accountability"
      ];
      motivoAssinatura = "O MyMoneyIA oferece uma planilha inteligente que se adapta ao seu estilo de vida, com automações que economizam horas do seu tempo. Nossa IA personaliza recomendações baseadas no seu perfil único e te guia passo a passo na jornada de organização financeira.";
    }

    if (objetivo === "sair-dividas") {
      planoSugerido = "anual";
    } else if (objetivo === "criar-reserva") {
      planoSugerido = "vitalicio";
    } else if (objetivo === "economizar") {
      planoSugerido = "anual";
    }

    if (renda === "ate-2000" || renda === "2000-4000") {
      planoSugerido = "mensal";
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
          beneficios: [
            "Planilha Inteligente MyMoneyIA",
            "E-book: 50 Dicas Financeiras (GRÁTIS)",
            "Categorização automática com IA",
            "Dashboard completo",
            "Metas personalizadas",
            "Suporte por email"
          ]
        };
      case "anual":
        return {
          nome: "Plano Premium",
          preco: "R$ 177",
          periodo: "/ano",
          economia: "Economize R$ 147 + E-book Grátis",
          beneficios: [
            "Tudo do Plano Básico",
            "E-book: 50 Dicas Financeiras (GRÁTIS)",
            "Análise mensal detalhada",
            "Recomendações personalizadas",
            "Biblioteca de prompts financeiros",
            "Suporte prioritário",
            "Atualizações vitalícias"
          ]
        };
      case "vitalicio":
        return {
          nome: "Plano Elite",
          preco: "R$ 347",
          periodo: "pagamento único",
          economia: "Economize R$ 300+ E-book Grátis",
          beneficios: [
            "Tudo do Plano Premium",
            "E-book: 50 Dicas Financeiras (GRÁTIS)",
            "Acesso vitalício",
            "Consultoria financeira mensal",
            "Novos recursos em primeira mão",
            "Comunidade exclusiva",
            "Garantia estendida"
          ]
        };
    }
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
                  Todos os planos agora incluem nosso e-book exclusivo com 50 dicas práticas para transformar sua vida financeira. Valor: R$ 47 - <span className="font-bold text-purple-600">GRÁTIS</span> na sua assinatura!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Plano Recomendado */}
        <div className="bg-gradient-to-br from-[#27ae60] to-[#1d3557] rounded-3xl shadow-2xl p-8 sm:p-12 text-white mb-8">
          <div className="text-center mb-8">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Plano Recomendado Para Você</h2>
            <p className="text-white/90">
              Baseado no seu perfil e objetivos
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{planoInfo.nome}</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold">{planoInfo.preco}</span>
                <span className="text-xl text-white/80">{planoInfo.periodo}</span>
              </div>
              {planoInfo.economia && (
                <p className="text-[#a8e6cf] font-semibold mt-2">{planoInfo.economia}</p>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {planoInfo.beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8e6cf] flex-shrink-0" />
                  <span className="text-white/90">{beneficio}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.open('https://pay.kiwify.com.br/seu-link-aqui', '_blank')}
              className="w-full bg-white text-[#1d3557] py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Começar Agora
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-white/80">
              <Shield size={16} />
              <span>Garantia de 7 dias - 100% do dinheiro de volta</span>
            </div>
          </div>
        </div>

        {/* Outros Planos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#1d3557] mb-6">
            Ou escolha outro plano
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["mensal", "anual", "vitalicio"] as const).map((tipo) => {
              if (tipo === plano.planoSugerido) return null;
              const info = getPlanoInfo(tipo);
              return (
                <div key={tipo} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#27ae60] transition-all">
                  <h4 className="text-xl font-bold text-[#1d3557] mb-2">{info.nome}</h4>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-3xl font-bold text-[#27ae60]">{info.preco}</span>
                    <span className="text-sm text-gray-600">{info.periodo}</span>
                  </div>
                  {info.economia && (
                    <p className="text-sm text-[#27ae60] font-semibold mb-4">{info.economia}</p>
                  )}
                  <button
                    onClick={() => window.open('https://pay.kiwify.com.br/seu-link-aqui', '_blank')}
                    className="w-full bg-gray-100 text-[#1d3557] py-3 rounded-xl font-semibold hover:bg-[#27ae60] hover:text-white transition-all"
                  >
                    Escolher
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* E-book Separado */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 sm:p-12 border-2 border-purple-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Award size={16} />
              OFERTA ESPECIAL
            </div>
            <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
              Prefere apenas o E-book?
            </h2>
            <p className="text-lg text-gray-700">
              Adquira nosso guia completo separadamente com desconto exclusivo
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-40 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-xl flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#1d3557] mb-3">
                E-book: 50 Dicas Financeiras que Vão Mudar Sua Vida
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Guia completo com estratégias práticas validadas por especialistas e IA. Aprenda a economizar, investir e conquistar sua liberdade financeira.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-purple-600">R$ 47</span>
                  <span className="text-lg text-gray-500 line-through">R$ 97</span>
                </div>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  50% OFF
                </span>
              </div>
              <button
                onClick={() => window.open('https://pay.kiwify.com.br/seu-link-ebook', '_blank')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Comprar E-book Agora
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
