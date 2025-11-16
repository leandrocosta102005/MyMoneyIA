import Link from "next/link";
import { CheckCircle, Star, TrendingUp, Target, BarChart3, Sparkles, Shield, Gift, ArrowRight, Users, Heart, Briefcase, Home, Zap, Clock, Infinity } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

export default function ProdutoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero de Vendas */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#27ae60]/10 text-[#27ae60] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Sparkles size={16} />
            Oferta Especial de Lançamento
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d3557] mb-6 leading-tight">
            A maneira mais simples e inteligente de organizar sua vida financeira
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            A Planilha MyMoneyIA faz todo o trabalho pesado por você: categoriza gastos, cria metas, analisa meses anteriores e diz exatamente onde você pode economizar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="text-[#27ae60]" size={20} />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="text-[#27ae60]" size={20} />
              <span>Atualizações incluídas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="text-[#27ae60]" size={20} />
              <span>Garantia de 7 dias</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-[#27ae60] fill-[#27ae60]" size={24} />
            ))}
            <span className="ml-2 text-gray-600 font-medium">4.9/5 (127 avaliações)</span>
          </div>
        </div>
      </section>

      {/* O Que Você Recebe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
              O que você recebe hoje
            </h2>
            <p className="text-xl text-gray-600">
              Um pacote completo para transformar sua vida financeira
            </p>
          </div>

          {/* Produto Principal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-[#27ae60]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#27ae60] to-[#1d3557] rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">
                  Planilha Inteligente MyMoneyIA
                </h3>
                <p className="text-gray-600">
                  A ferramenta completa para organizar suas finanças
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1d3557]">Categorias automáticas</p>
                  <p className="text-sm text-gray-600">Seus gastos organizados sem esforço</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1d3557]">Dashboard completo</p>
                  <p className="text-sm text-gray-600">Visualize tudo de forma clara</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1d3557]">Gráficos de análise</p>
                  <p className="text-sm text-gray-600">Entenda seus padrões financeiros</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1d3557]">Metas personalizadas</p>
                  <p className="text-sm text-gray-600">Objetivos realistas para você</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1d3557]">Recomendação de cortes</p>
                  <p className="text-sm text-gray-600">IA sugere onde economizar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-[#1d3557]">Módulo de resumo mensal</p>
                  <p className="text-sm text-gray-600">Análise completa todo mês</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bônus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center">
                  <Gift className="text-[#27ae60]" size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#27ae60] uppercase">Bônus 1</span>
                  <h3 className="font-bold text-lg text-[#1d3557]">Mini Ebook</h3>
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-2">
                "5 Passos para Organizar sua Vida Financeira"
              </p>
              <p className="text-sm text-gray-600">
                Guia simples e prático para começar hoje mesmo
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-[#27ae60]" size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#27ae60] uppercase">Bônus 2</span>
                  <h3 className="font-bold text-lg text-[#1d3557]">Biblioteca de Prompts</h3>
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-2">
                Prompts prontos para ChatGPT
              </p>
              <p className="text-sm text-gray-600">
                Focados em economia, planejamento, organização e controle de gastos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstração do Produto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
              Veja como funciona
            </h2>
            <p className="text-xl text-gray-600">
              Interface simples e intuitiva, feita para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#27ae60]/10 to-[#1d3557]/10 rounded-2xl p-12 flex items-center justify-center min-h-[300px] hover:shadow-xl transition-shadow">
              <div className="text-center">
                <BarChart3 size={80} className="text-[#27ae60] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Dashboard Principal</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1d3557]/10 to-[#27ae60]/10 rounded-2xl p-12 flex items-center justify-center min-h-[300px] hover:shadow-xl transition-shadow">
              <div className="text-center">
                <Target size={80} className="text-[#1d3557] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Painel de Metas</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#27ae60]/10 to-[#1d3557]/10 rounded-2xl p-12 flex items-center justify-center min-h-[300px] hover:shadow-xl transition-shadow">
              <div className="text-center">
                <TrendingUp size={80} className="text-[#27ae60] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Análise de Gastos</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1d3557]/10 to-[#27ae60]/10 rounded-2xl p-12 flex items-center justify-center min-h-[300px] hover:shadow-xl transition-shadow">
              <div className="text-center">
                <Sparkles size={80} className="text-[#1d3557] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">Recomendações IA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
              Esta planilha é perfeita para você se...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-[#27ae60]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1d3557] mb-2">Está endividado</h3>
                <p className="text-gray-600">E precisa de clareza para sair dessa situação</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="text-[#27ae60]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1d3557] mb-2">É jovem adulto</h3>
                <p className="text-gray-600">Começando a vida financeira independente</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="text-[#27ae60]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1d3557] mb-2">É um casal</h3>
                <p className="text-gray-600">Que quer organizar as finanças juntos</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-[#27ae60]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1d3557] mb-2">É autônomo</h3>
                <p className="text-gray-600">Com renda variável que precisa de controle</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="text-[#27ae60]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1d3557] mb-2">Tem uma família</h3>
                <p className="text-gray-600">E quer garantir estabilidade financeira</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#27ae60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-[#27ae60]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1d3557] mb-2">Quer clareza</h3>
                <p className="text-gray-600">Sobre para onde seu dinheiro está indo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Reais */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
              O que você vai conseguir
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#27ae60]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#27ae60]">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-[#1d3557]">Você sabe exatamente para onde vai o seu dinheiro</span> — sem surpresas no fim do mês
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#27ae60]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#27ae60]">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-[#1d3557]">Pare de viver no automático financeiro</span> — tome decisões conscientes sobre seu dinheiro
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#27ae60]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#27ae60]">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-[#1d3557]">Tenha clareza e controle total</span> — saiba quanto pode gastar sem culpa
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#27ae60]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#27ae60]">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-[#1d3557]">Economize automaticamente</span> — a IA mostra onde cortar sem sacrificar qualidade de vida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
              O que nossos usuários dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#27ae60] fill-[#27ae60]" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Finalmente consegui entender para onde meu dinheiro estava indo. Em 2 meses economizei R$ 800 só cortando gastos que nem sabia que tinha!"
              </p>
              <p className="font-bold text-[#1d3557]">Marina S.</p>
              <p className="text-sm text-gray-600">Designer, 28 anos</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#27ae60] fill-[#27ae60]" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Sou péssimo com planilhas, mas essa é tão simples que até eu consegui usar. Minha vida financeira mudou completamente."
              </p>
              <p className="font-bold text-[#1d3557]">Carlos R.</p>
              <p className="text-sm text-gray-600">Autônomo, 35 anos</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#27ae60] fill-[#27ae60]" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Melhor investimento que fiz! Consegui organizar toda minha vida financeira. Vale cada centavo!"
              </p>
              <p className="font-bold text-[#1d3557]">Juliana M.</p>
              <p className="text-sm text-gray-600">Professora, 31 anos</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#27ae60] fill-[#27ae60]" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Estava endividado e sem saber por onde começar. A planilha me deu clareza e um plano. Hoje já paguei 60% das dívidas!"
              </p>
              <p className="font-bold text-[#1d3557]">Roberto F.</p>
              <p className="text-sm text-gray-600">Vendedor, 42 anos</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-[#27ae60] fill-[#27ae60]" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Eu e meu marido finalmente conseguimos organizar nossas finanças juntos. Acabaram as brigas por dinheiro!"
              </p>
              <p className="font-bold text-[#1d3557]">Ana Paula L.</p>
              <p className="text-sm text-gray-600">Enfermeira, 29 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1d3557] to-[#27ae60]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔥 Escolha o melhor plano para você
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Invista no seu futuro financeiro
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Escolha entre pagamento mensal ou anual e comece a transformar sua vida financeira hoje mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Clock size={16} />
                  Mensal
                </div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">Plano Básico</h3>
                <p className="text-gray-600">Ideal para começar</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#1d3557]">R$ 29</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-sm text-gray-500">Cobrado mensalmente</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Planilha Inteligente completa</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Dashboard e gráficos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Análise mensal com IA</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Metas personalizadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suporte por email</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Atualizações incluídas</span>
                </div>
              </div>

              <Link 
                href="/cadastro?plan=mensal"
                className="block w-full bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white text-center px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Começar Agora
              </Link>
            </div>

            {/* Plano Anual - DESTAQUE */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl relative border-4 border-[#27ae60] transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#27ae60] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  🏆 MAIS POPULAR
                </div>
              </div>

              <div className="text-center mb-6 mt-4">
                <div className="inline-flex items-center gap-2 bg-[#27ae60]/10 text-[#27ae60] px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Zap size={16} />
                  Anual
                </div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">Plano Premium</h3>
                <p className="text-gray-600">Melhor custo-benefício</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">R$ 348</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#27ae60]">R$ 197</span>
                  <span className="text-gray-600">/ano</span>
                </div>
                <div className="inline-block bg-[#27ae60]/10 text-[#27ae60] px-3 py-1 rounded-full text-sm font-bold">
                  Economize R$ 151 (43% OFF)
                </div>
                <p className="text-sm text-gray-500 mt-2">Apenas R$ 16,42/mês</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Tudo do Plano Mensal +</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Análise trimestral detalhada</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Relatórios personalizados</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suporte prioritário</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Acesso a novos recursos primeiro</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-bold">Bônus exclusivos</span>
                </div>
              </div>

              <Link 
                href="/cadastro?plan=anual"
                className="block w-full bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white text-center px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                Garantir Desconto
              </Link>
            </div>

            {/* Plano Vitalício */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-[#1d3557]/10 text-[#1d3557] px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Infinity size={16} />
                  Vitalício
                </div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-2">Plano Elite</h3>
                <p className="text-gray-600">Pagamento único</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">R$ 697</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#1d3557]">R$ 397</span>
                </div>
                <div className="inline-block bg-[#1d3557]/10 text-[#1d3557] px-3 py-1 rounded-full text-sm font-bold">
                  Economize R$ 300
                </div>
                <p className="text-sm text-gray-500 mt-2">Acesso para sempre</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Tudo do Plano Premium +</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Acesso vitalício</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Todas as atualizações futuras</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Consultoria financeira mensal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Comunidade exclusiva</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#27ae60] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-bold">Sem mensalidade nunca mais</span>
                </div>
              </div>

              <Link 
                href="/cadastro?plan=vitalicio"
                className="block w-full bg-gradient-to-r from-[#1d3557] to-[#27ae60] text-white text-center px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Investir Agora
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/90 text-sm">
              🔒 Pagamento 100% seguro • Garantia de 7 dias em todos os planos
            </p>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center border-2 border-[#27ae60]">
            <div className="w-20 h-20 bg-[#27ae60]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-[#27ae60]" size={40} />
            </div>
            
            <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
              Garantia Incondicional de 7 Dias
            </h2>
            
            <p className="text-xl text-gray-700 mb-6">
              Se você não gostar, devolvemos seu dinheiro. Simples assim.
            </p>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Você tem 7 dias completos para testar a Planilha MyMoneyIA. Se por qualquer motivo você não ficar satisfeito, basta enviar um email e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-6">
            Pronto para ter controle total do seu dinheiro?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a centenas de pessoas que já transformaram suas finanças
          </p>
          <Link 
            href="/cadastro"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white px-12 py-5 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Começar Agora
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
