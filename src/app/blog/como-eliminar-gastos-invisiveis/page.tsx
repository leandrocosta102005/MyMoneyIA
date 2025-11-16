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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Economia</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Como eliminar gastos invisíveis
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
              Gastos invisíveis são aqueles que você nem percebe, mas que somados fazem uma diferença enorme no fim do mês. Vou te mostrar como identificá-los e eliminá-los.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 1: Rastreie TUDO por 30 dias
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sim, tudo mesmo. Cada café, cada lanche, cada app, cada compra. Use uma planilha, um app, um caderno. O método não importa. O importante é registrar absolutamente tudo por 30 dias completos.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 2: Categorize seus gastos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depois dos 30 dias, agrupe tudo em categorias: alimentação, transporte, assinaturas, compras por impulso, etc. Você vai se assustar com algumas categorias.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 3: Identifique os "pequenos" gastos recorrentes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Procure por:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Cafés e lanches diários</li>
              <li>Assinaturas que você esqueceu</li>
              <li>Delivery "só hoje" que virou rotina</li>
              <li>Compras de R$ 10-20 que você nem lembra</li>
              <li>Taxas e juros evitáveis</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 4: Calcule o custo anual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pegue cada gasto recorrente e multiplique por 12. Aquele café de R$ 7 por dia? R$ 1.680 por ano. Aquela assinatura de R$ 30? R$ 360 por ano. Ver o número anual assusta e motiva.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 5: Aplique a regra do valor real
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para cada gasto, pergunte: "Isso vale X horas do meu trabalho?" Se você ganha R$ 20/hora, aquele café de R$ 7 vale 20 minutos do seu trabalho. Vale mesmo?
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 6: Elimine ou substitua
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agora é hora de agir:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Cancele assinaturas não usadas</li>
              <li>Substitua hábitos caros por alternativas mais baratas</li>
              <li>Elimine gastos que não trazem valor real</li>
              <li>Mantenha apenas o que realmente importa</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 7: Automatize a economia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pegue o valor que você economizou e configure uma transferência automática para poupança. Assim você garante que o dinheiro não vai "desaparecer" em outros gastos invisíveis.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O impacto real
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A maioria das pessoas consegue eliminar R$ 500-1.000 em gastos invisíveis por mês. Em um ano, isso é R$ 6.000-12.000 que estavam simplesmente desaparecendo. Imagine o que você poderia fazer com esse dinheiro.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Identifique gastos invisíveis automaticamente
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA rastreia e categoriza tudo, mostrando onde seu dinheiro está escapando
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
