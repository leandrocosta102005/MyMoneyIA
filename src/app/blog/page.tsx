import Link from "next/link";
import { ArrowRight, BarChart3, Target, TrendingUp, DollarSign, PiggyBank, CreditCard, Wallet, Calculator, TrendingDown, Shield } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const articles = [
  {
    slug: "como-organizar-suas-financas-em-2026",
    title: "Como organizar suas finanças em 2026",
    excerpt: "Guia completo para começar o ano com o pé direito financeiro",
    icon: BarChart3,
    category: "Organização"
  },
  {
    slug: "o-que-realmente-faz-voce-gastar-mais-do-que-ganha",
    title: "O que realmente faz você gastar mais do que ganha",
    excerpt: "Descubra os gatilhos psicológicos por trás dos seus gastos",
    icon: TrendingDown,
    category: "Comportamento"
  },
  {
    slug: "como-montar-um-orcamento-simples-e-funcional",
    title: "Como montar um orçamento simples e funcional",
    excerpt: "Passo a passo para criar um orçamento que realmente funciona",
    icon: Calculator,
    category: "Planejamento"
  },
  {
    slug: "habitos-financeiros-que-mudam-sua-vida",
    title: "Hábitos financeiros que mudam sua vida",
    excerpt: "Pequenas mudanças que geram grandes resultados",
    icon: Target,
    category: "Hábitos"
  },
  {
    slug: "como-eliminar-gastos-invisiveis",
    title: "Como eliminar gastos invisíveis",
    excerpt: "Identifique e corte despesas que você nem percebe",
    icon: TrendingUp,
    category: "Economia"
  },
  {
    slug: "metodo-facil-para-sair-das-dividas",
    title: "Método fácil para sair das dívidas",
    excerpt: "Estratégia comprovada para se livrar das dívidas",
    icon: CreditCard,
    category: "Dívidas"
  },
  {
    slug: "planilha-simples-para-controlar-gastos",
    title: "Planilha simples para controlar gastos",
    excerpt: "Como usar planilhas para ter controle financeiro",
    icon: Wallet,
    category: "Ferramentas"
  },
  {
    slug: "como-definir-metas-financeiras-realistas",
    title: "Como definir metas financeiras realistas",
    excerpt: "Estabeleça objetivos que você realmente pode alcançar",
    icon: Target,
    category: "Metas"
  },
  {
    slug: "como-economizar-dinheiro-ganhando-pouco",
    title: "Como economizar dinheiro ganhando pouco",
    excerpt: "Dicas práticas para quem tem renda limitada",
    icon: PiggyBank,
    category: "Economia"
  },
  {
    slug: "gastos-invisiveis-que-drenam-seu-dinheiro",
    title: "Gastos invisíveis que drenam seu dinheiro",
    excerpt: "Descubra onde seu dinheiro está escapando",
    icon: DollarSign,
    category: "Análise"
  },
  {
    slug: "maneiras-simples-de-economizar",
    title: "Maneiras simples de economizar",
    excerpt: "Dicas práticas que funcionam na vida real",
    icon: Shield,
    category: "Dicas"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero do Blog */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d3557] mb-6 leading-tight">
            Blog MyMoneyIA
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Conteúdos práticos e diretos para você dominar suas finanças pessoais
          </p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <Link 
                  key={article.slug} 
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-full">
                    <div className="bg-gradient-to-br from-[#27ae60]/20 to-[#1d3557]/20 h-48 flex items-center justify-center">
                      <Icon size={64} className="text-[#27ae60]" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-[#27ae60] uppercase mb-2 block">
                        {article.category}
                      </span>
                      <h3 className="font-bold text-xl text-[#1d3557] mb-3 group-hover:text-[#27ae60] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <span className="text-[#27ae60] font-medium inline-flex items-center gap-2">
                        Ler artigo <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Quer organizar suas finanças de verdade?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Conheça a Planilha Inteligente MyMoneyIA
          </p>
          <Link 
            href="/produto"
            className="inline-flex items-center gap-2 bg-white text-[#1d3557] px-8 py-4 rounded-lg text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Conhecer a Planilha
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
