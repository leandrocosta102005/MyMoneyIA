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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Metas</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Como definir metas financeiras realistas
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
              Metas financeiras vagas como "quero economizar" ou "quero ser rico" não funcionam. Você precisa de metas específicas, mensuráveis e, principalmente, realistas. Vou te mostrar como criar metas que você realmente vai alcançar.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Por que a maioria das metas falha
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Porque são irreais. "Vou economizar R$ 2.000 por mês" quando você mal consegue guardar R$ 200. "Vou quitar todas as dívidas em 3 meses" quando você tem R$ 20.000 em dívidas. Metas impossíveis só geram frustração.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Use o método SMART
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suas metas precisam ser:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Específicas:</strong> "Economizar R$ 500" em vez de "economizar mais"</li>
              <li><strong>Mensuráveis:</strong> Você consegue medir o progresso</li>
              <li><strong>Alcançáveis:</strong> Baseadas na sua realidade atual</li>
              <li><strong>Relevantes:</strong> Importam de verdade para você</li>
              <li><strong>Temporais:</strong> Têm prazo definido</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Tipos de metas financeiras
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Curto prazo (até 6 meses):</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Criar reserva de emergência de R$ 1.000</li>
              <li>Quitar dívida do cartão</li>
              <li>Economizar para uma viagem</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Médio prazo (6 meses a 2 anos):</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Juntar entrada para um carro</li>
              <li>Quitar todas as dívidas</li>
              <li>Criar reserva de 6 meses de despesas</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Longo prazo (mais de 2 anos):</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Comprar um imóvel</li>
              <li>Aposentadoria</li>
              <li>Independência financeira</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Como calcular se sua meta é realista
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Exemplo: Você quer juntar R$ 6.000 em 12 meses
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>R$ 6.000 ÷ 12 meses = R$ 500 por mês</li>
              <li>Você consegue guardar R$ 500 por mês?</li>
              <li>Se sim: meta realista</li>
              <li>Se não: ajuste o valor ou o prazo</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Priorize suas metas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você não consegue focar em 10 metas ao mesmo tempo. Escolha no máximo 3:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>1 meta de curto prazo (motivação rápida)</li>
              <li>1 meta de médio prazo (progresso consistente)</li>
              <li>1 meta de longo prazo (visão de futuro)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Torne suas metas visíveis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Escreva suas metas e coloque onde você vê todo dia. Papel na geladeira, wallpaper do celular, post-it no espelho. O que está fora da vista, está fora da mente.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Acompanhe o progresso semanalmente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Reserve 10 minutos toda semana para revisar: Quanto falta? Estou no caminho certo? Preciso ajustar algo? Ver o progresso mantém você motivado.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O poder das metas realistas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Uma meta pequena alcançada vale mais que uma meta gigante abandonada. Comece com algo que você sabe que consegue. Quando alcançar, crie uma meta maior. Sucesso gera sucesso.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Acompanhe suas metas automaticamente
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA cria metas personalizadas e mostra seu progresso em tempo real
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
