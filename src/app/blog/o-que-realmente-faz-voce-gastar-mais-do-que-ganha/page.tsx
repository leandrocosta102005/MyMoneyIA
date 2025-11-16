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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Comportamento</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              O que realmente faz você gastar mais do que ganha
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
              O problema não é quanto você ganha. É como você gasta. Entender os gatilhos psicológicos que te fazem gastar é o primeiro passo para ter controle financeiro de verdade.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              1. Você compra emoção, não produtos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aquela roupa nova não é só uma roupa. É a sensação de ser uma pessoa melhor. Aquele jantar caro não é só comida. É a sensação de sucesso. Reconheça: você está comprando como se sente, não o que precisa.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              2. O efeito "eu mereço"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Teve uma semana difícil? "Eu mereço esse presente." Trabalhou muito? "Eu mereço esse jantar." O problema não é se presentear. O problema é usar isso como justificativa para todo gasto impulsivo.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              3. Comparação social
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Seu amigo comprou um carro novo. Seu colega viajou para o exterior. Você vê isso no Instagram e sente que precisa acompanhar. Mas você não vê as dívidas, o estresse financeiro, a realidade por trás das fotos.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              4. A ilusão do parcelamento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              "São só 12x de R$ 50." Parece pouco, né? Mas você faz isso 5 vezes e de repente tem R$ 250 de parcelas todo mês. E quando você percebe, 80% do seu salário já está comprometido antes mesmo de receber.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              5. Falta de clareza sobre o futuro
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você não tem metas financeiras claras. Não sabe quanto precisa para se aposentar, para comprar uma casa, para ter segurança. Então gasta tudo hoje porque o futuro é abstrato demais.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              6. Você não sente a dor do pagamento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cartão de crédito, PIX, aproximação. Você não vê o dinheiro saindo. Estudos mostram que gastamos 30-50% a mais quando não usamos dinheiro físico. A dor de pagar foi anestesiada.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              7. Você vive no piloto automático
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você não decide gastar. Você simplesmente gasta. É automático. Passou na frente da cafeteria? Compra um café. Viu uma promoção? Compra. Recebeu o salário? Gasta. Sem pensar, sem questionar.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Como quebrar esse ciclo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A solução não é parar de gastar. É gastar conscientemente:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Antes de comprar, pergunte: "Isso me aproxima ou me afasta dos meus objetivos?"</li>
              <li>Espere 24h antes de qualquer compra acima de R$ 100</li>
              <li>Defina metas financeiras claras e visuais</li>
              <li>Acompanhe seus gastos semanalmente</li>
              <li>Identifique seus gatilhos emocionais</li>
            </ul>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                A verdade que ninguém quer ouvir
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Você não tem um problema de dinheiro. Você tem um problema de comportamento. E a boa notícia é: comportamento pode ser mudado. Mas primeiro você precisa reconhecer os padrões.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Entenda seus padrões de gastos
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA analisa seu comportamento financeiro e mostra seus gatilhos de gastos
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
