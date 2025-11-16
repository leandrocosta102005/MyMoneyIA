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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Dívidas</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Método fácil para sair das dívidas
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Janeiro 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min de leitura</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Sair das dívidas parece impossível quando você está no meio delas. Mas com um método simples e consistência, é totalmente possível. Vou te mostrar o caminho.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 1: Pare de criar novas dívidas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Antes de pensar em pagar, você precisa parar de aumentar o buraco. Guarde os cartões de crédito. Use apenas débito ou dinheiro. Parece óbvio, mas é o passo que a maioria pula.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 2: Liste todas as dívidas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pegue papel e caneta. Liste TUDO:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Nome do credor</li>
              <li>Valor total da dívida</li>
              <li>Taxa de juros</li>
              <li>Valor da parcela mínima</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sim, vai doer ver tudo junto. Mas você precisa encarar a realidade para mudá-la.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 3: Escolha seu método
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Existem dois métodos principais:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Método Bola de Neve:</strong> Pague primeiro a menor dívida. Quando quitá-la, use o valor que pagava nela para a próxima menor. Psicologicamente motivador.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Método Avalanche:</strong> Pague primeiro a dívida com maior juros. Matematicamente mais eficiente, economiza mais dinheiro no longo prazo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Escolha o que faz mais sentido para você. O melhor método é aquele que você vai seguir.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 4: Negocie suas dívidas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ligue para seus credores. Pergunte sobre descontos para pagamento à vista ou renegociação. Muitas vezes conseguem reduzir juros ou dar desconto de 30-50% no valor total. Não custa tentar.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 5: Encontre dinheiro extra
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você precisa de margem para pagar mais que o mínimo. Opções:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Corte gastos não essenciais temporariamente</li>
              <li>Venda coisas que não usa</li>
              <li>Faça freelas ou bicos nos fins de semana</li>
              <li>Use 13º salário e bônus para quitar dívidas</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 6: Pague mais que o mínimo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mesmo que seja R$ 50 a mais. Pagar só o mínimo significa que você vai levar anos para quitar e pagar o dobro ou triplo em juros. Todo dinheiro extra vai para a dívida prioritária.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 7: Acompanhe seu progresso
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Crie uma planilha ou use um app. Atualize semanalmente. Ver o saldo diminuindo mantém você motivado. Comemore cada dívida quitada, mesmo as pequenas.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                A verdade sobre sair das dívidas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Não é rápido. Não é fácil. Mas é possível. A maioria das pessoas consegue quitar todas as dívidas em 12-24 meses seguindo esse método. O segredo é começar hoje e não desistir.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Acompanhe sua jornada de quitação
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA cria um plano personalizado e mostra seu progresso mês a mês
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
