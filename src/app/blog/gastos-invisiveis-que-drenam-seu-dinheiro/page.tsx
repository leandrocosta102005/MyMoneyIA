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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Análise</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Gastos invisíveis que drenam seu dinheiro
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Janeiro 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>7 min de leitura</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Você sabe exatamente para onde vai todo o seu dinheiro? A maioria das pessoas não sabe. E o problema não são os gastos grandes e óbvios, mas sim aqueles pequenos e invisíveis que somados fazem uma diferença enorme.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              O cafezinho de R$ 7
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Parece pouco, né? Mas se você toma um por dia útil, são R$ 140 por mês, R$ 1.680 por ano. Não estou dizendo para parar de tomar café, mas você precisa saber que esse "pequeno prazer" custa quase R$ 2.000 por ano.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Assinaturas esquecidas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aquele app que você usou uma vez e esqueceu de cancelar. O streaming que você nem lembra que tem. A academia que você não vai há meses. Essas assinaturas "invisíveis" podem custar R$ 200-400 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Delivery "só hoje"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você pede delivery "só hoje" porque está cansado. Mas "só hoje" vira 3-4 vezes por semana. Com taxa de entrega e gorjeta, cada pedido sai 50-70% mais caro que cozinhar. Isso pode representar R$ 600-800 a mais por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Compras por impulso no mercado
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você vai comprar leite e volta com R$ 150 em coisas que "estavam em promoção". Estudos mostram que compramos 30-40% a mais quando vamos ao mercado sem lista. Isso pode significar R$ 300-500 extras por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Juros e multas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Atraso de 2 dias no cartão. Multa por pagar a conta depois do vencimento. Juros do cheque especial que você "só usou um pouquinho". Esses pequenos deslizes podem custar R$ 100-300 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              O "só R$ 10"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aquela coisinha de R$ 10 que você compra sem pensar. Um lanche aqui, um item ali, uma besteirinha acolá. Parece nada, mas se você faz isso 3-4 vezes por semana, são R$ 120-160 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Como identificar seus gastos invisíveis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A única forma de ver o invisível é registrar TUDO por 30 dias. Sim, tudo mesmo. Você vai se assustar com o que descobrir. Depois, pergunte-se:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Isso realmente me traz valor?</li>
              <li>Eu lembro de ter comprado isso?</li>
              <li>Eu compraria de novo conscientemente?</li>
            </ul>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                A verdade sobre gastos invisíveis
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Somando todos esses "pequenos" gastos invisíveis, você pode estar perdendo R$ 1.000-2.000 por mês sem perceber. Em um ano, isso é R$ 12.000-24.000 que simplesmente desapareceram.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Identifique seus gastos invisíveis automaticamente
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA categoriza e analisa cada centavo, mostrando onde seu dinheiro realmente vai
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
