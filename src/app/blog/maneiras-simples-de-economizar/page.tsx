import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

export default function ArtigoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#27ae60] hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} />
            Voltar para o blog
          </Link>

          <div className="mb-8">
            <span className="text-sm font-bold text-[#27ae60] uppercase">Dicas</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Maneiras simples de economizar
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Janeiro 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min de leitura</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Economizar não precisa significar sacrifício. Com pequenas mudanças nos seus hábitos diários, você pode guardar dinheiro sem sentir que está abrindo mão de tudo.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              1. A regra das 24 horas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Antes de fazer qualquer compra acima de R$ 100, espere 24 horas. Você vai perceber que muitas vezes o impulso passa e você nem queria tanto aquilo. Essa simples pausa pode economizar centenas de reais por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              2. Cancele assinaturas que você não usa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aquele streaming que você assiste uma vez por mês? A academia que você não vai há 3 meses? Cancele. Você pode reativar quando realmente precisar. Isso pode liberar R$ 100-300 por mês facilmente.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              3. Prepare suas refeições
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Não precisa virar chef. Mas preparar pelo menos o almoço da semana pode economizar R$ 400-600 por mês. Comece devagar: faça só 2-3 dias por semana e vá aumentando.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              4. Use a regra do "custo por uso"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Antes de comprar algo, calcule quanto vai custar por uso. Uma roupa de R$ 200 que você vai usar 50 vezes sai a R$ 4 por uso. Um item de R$ 50 que você vai usar 2 vezes sai a R$ 25 por uso. Pense nisso.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              5. Automatize sua economia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Configure uma transferência automática de 10% do seu salário para uma conta separada assim que você receber. Você nem vai sentir falta e no fim do ano terá um bom dinheiro guardado.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              6. Negocie suas contas fixas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Liga para sua operadora de internet, celular, seguros. Pergunte se tem um plano mais barato. Muitas vezes eles oferecem descontos só para você não cancelar. Pode economizar R$ 50-150 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              7. Compre com lista
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Seja no mercado ou em qualquer loja: vá com uma lista e compre APENAS o que está nela. Compras por impulso podem aumentar sua conta em 30-40%.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O segredo está na consistência
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nenhuma dessas dicas sozinha vai te deixar rico. Mas juntas, aplicadas consistentemente, podem economizar R$ 500-1000 por mês. Em um ano, isso é R$ 6.000-12.000 a mais no seu bolso.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer acompanhar sua economia automaticamente?
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA mostra exatamente quanto você economizou mês a mês
            </p>
            <Link 
              href="/produto"
              className="inline-block bg-white text-[#1d3557] px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all"
            >
              Conhecer a Planilha MyMoneyIA
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
