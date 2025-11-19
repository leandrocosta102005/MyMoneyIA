"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  BarChart3,
  Clock,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const scrollToOferecemos = () => {
    const element = document.getElementById('oferecemos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header com apenas Cadastro/Login */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-[#27ae60]" />
              <span className="text-2xl font-bold text-[#1d3557]">MyMoneyIA</span>
            </Link>
            
            <Link
              href="/cadastro"
              className="px-6 py-2.5 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Cadastro / Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#27ae60]/10 text-[#27ae60] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Inteligência Artificial para suas Finanças
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d3557] mb-6">
            Transforme sua vida financeira com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27ae60] to-[#1d3557]">
              MyMoneyIA
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Chega de planilhas complicadas e dívidas sem fim. Nossa IA personalizada 
            analisa seu perfil e cria um plano sob medida para você alcançar seus objetivos financeiros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/cadastro"
              className="px-8 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Começar Agora Grátis
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={scrollToOferecemos}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:border-[#27ae60] hover:text-[#27ae60] transition-all"
            >
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Users, value: "10.000+", label: "Usuários Ativos" },
              { icon: DollarSign, value: "R$ 2M+", label: "Economizados" },
              { icon: Target, value: "95%", label: "Taxa de Sucesso" },
              { icon: Star, value: "4.9/5", label: "Avaliação" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <stat.icon className="w-8 h-8 text-[#27ae60] mx-auto mb-2" />
                <p className="text-3xl font-bold text-[#1d3557] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Resolvemos sua Dor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              Como ajudamos você a resolver seus problemas financeiros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos suas dores e criamos soluções personalizadas com inteligência artificial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Não sabe para onde vai seu dinheiro?",
                description: "Nossa IA rastreia automaticamente seus gastos e cria visualizações claras de onde cada centavo está indo.",
                solution: "Visão completa em tempo real",
              },
              {
                icon: TrendingUp,
                title: "Endividado e sem saída?",
                description: "Criamos um plano de quitação inteligente baseado na sua renda, priorizando dívidas com juros mais altos.",
                solution: "Plano de quitação personalizado",
              },
              {
                icon: Target,
                title: "Nunca sobra dinheiro no fim do mês?",
                description: "Identificamos gastos desnecessários e sugerimos cortes estratégicos sem afetar sua qualidade de vida.",
                solution: "Economia inteligente e sustentável",
              },
              {
                icon: Shield,
                title: "Sem controle dos gastos?",
                description: "Alertas inteligentes te avisam antes de estourar o orçamento e sugerem alternativas mais econômicas.",
                solution: "Controle automático e preventivo",
              },
              {
                icon: Clock,
                title: "Planilhas são muito complicadas?",
                description: "Esqueça planilhas! Nossa IA faz tudo automaticamente. Você só precisa responder perguntas simples.",
                solution: "Simplicidade e automação total",
              },
              {
                icon: Sparkles,
                title: "Sem metas financeiras claras?",
                description: "Ajudamos você a definir objetivos realistas e criamos um caminho passo a passo para alcançá-los.",
                solution: "Metas claras e alcançáveis",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-[#27ae60]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#27ae60]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-[#27ae60] font-semibold">
                  <CheckCircle size={20} />
                  <span className="text-sm">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que Oferecemos */}
      <section id="oferecemos" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              O QUE OFERECEMOS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas poderosas e inteligentes para transformar sua relação com o dinheiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Análise Financeira com IA",
                description: "Nossa inteligência artificial analisa seu perfil financeiro completo e identifica oportunidades de economia e investimento personalizadas para você.",
                features: ["Análise em tempo real", "Recomendações personalizadas", "Previsões inteligentes"],
              },
              {
                title: "Planos Personalizados",
                description: "Receba um plano financeiro sob medida baseado em suas respostas, objetivos e situação atual. Não é genérico, é feito para VOCÊ.",
                features: ["100% personalizado", "Metas realistas", "Acompanhamento contínuo"],
              },
              {
                title: "Chat com IA 24/7",
                description: "Tire dúvidas, peça conselhos e receba orientações financeiras a qualquer hora do dia. Sua consultora financeira pessoal sempre disponível.",
                features: ["Disponível 24/7", "Respostas instantâneas", "Contexto personalizado"],
              },
              {
                title: "E-book Exclusivo de Dicas",
                description: "Acesso ao nosso e-book completo com estratégias práticas, dicas de economia e métodos comprovados para organizar suas finanças.",
                features: ["Conteúdo exclusivo", "Dicas práticas", "Métodos comprovados"],
              },
            ].map((offer, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#27ae60] transition-all">
                <h3 className="text-2xl font-bold text-[#1d3557] mb-4">{offer.title}</h3>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <ul className="space-y-3">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#27ae60] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações de Clientes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1d3557] to-[#27ae60]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Professora",
                avatar: "MS",
                rating: 5,
                text: "Em 3 meses consegui sair do vermelho e criar minha primeira reserva de emergência. A IA me mostrou gastos que eu nem percebia!",
              },
              {
                name: "João Santos",
                role: "Autônomo",
                avatar: "JS",
                rating: 5,
                text: "Como freelancer, minha renda varia muito. O MyMoneyIA me ajudou a organizar tudo e agora consigo planejar mesmo com renda variável.",
              },
              {
                name: "Ana Costa",
                role: "Empreendedora",
                avatar: "AC",
                rating: 5,
                text: "Estava com 5 cartões de crédito no limite. Segui o plano da IA e em 6 meses quitei tudo. Hoje tenho controle total!",
              },
              {
                name: "Pedro Oliveira",
                role: "Engenheiro",
                avatar: "PO",
                rating: 5,
                text: "Sempre achei planilhas complicadas. Com o MyMoneyIA, tudo é automático e visual. Finalmente entendo para onde vai meu dinheiro.",
              },
              {
                name: "Carla Mendes",
                role: "Designer",
                avatar: "CM",
                rating: 5,
                text: "O chat com IA é incrível! Qualquer dúvida que tenho, recebo uma resposta personalizada na hora. É como ter um consultor particular.",
              },
              {
                name: "Lucas Ferreira",
                role: "Vendedor",
                avatar: "LF",
                rating: 5,
                text: "Consegui economizar R$ 15.000 em um ano seguindo as recomendações. Agora estou realizando o sonho da casa própria!",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#27ae60] to-[#1d3557] flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#1d3557]">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#27ae60] text-[#27ae60]" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Cadastre-se agora e comece seu quiz personalizado. Em menos de 5 minutos, 
            você terá um plano completo feito especialmente para você.
          </p>
          
          <Link
            href="/cadastro"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Começar Minha Jornada Agora
            <ArrowRight size={24} />
          </Link>

          <p className="mt-6 text-gray-500">
            ✓ Sem cartão de crédito necessário • ✓ Cancele quando quiser • ✓ Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d3557] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-8 h-8 text-[#27ae60]" />
            <span className="text-2xl font-bold">MyMoneyIA</span>
          </div>
          <p className="text-white/80 mb-6">
            Transformando vidas através da inteligência artificial financeira
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <button onClick={scrollToOferecemos} className="hover:text-white transition-colors">
              O que Oferecemos
            </button>
            <Link href="/chat-ia" className="hover:text-white transition-colors">
              Chat com IA
            </Link>
            <Link href="/cadastro" className="hover:text-white transition-colors">
              Cadastro
            </Link>
          </div>
          <p className="mt-8 text-white/40 text-sm">
            © 2024 MyMoneyIA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
