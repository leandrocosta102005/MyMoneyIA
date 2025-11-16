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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Organização</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Como organizar suas finanças em 2026
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
              Começar o ano com as finanças organizadas pode parecer complicado, mas não precisa ser. Neste guia, você vai aprender um método simples e prático para ter controle total do seu dinheiro em 2026.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Por que organizar suas finanças agora?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A maioria das pessoas começa o ano com boas intenções financeiras, mas sem um plano claro. Resultado? Em março, já perderam o controle. A diferença entre quem consegue e quem desiste está na simplicidade do método.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 1: Faça um raio-X da sua situação atual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antes de planejar o futuro, você precisa entender o presente. Pegue os extratos dos últimos 3 meses e anote:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Quanto você ganha por mês (média)</li>
              <li>Quanto você gasta por mês (média)</li>
              <li>Principais categorias de gastos</li>
              <li>Dívidas existentes</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 2: Crie categorias simples
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não complique. Use apenas 5-7 categorias principais:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Essenciais:</strong> moradia, alimentação, transporte</li>
              <li><strong>Contas fixas:</strong> internet, celular, streaming</li>
              <li><strong>Variáveis:</strong> lazer, roupas, saídas</li>
              <li><strong>Investimentos:</strong> poupança, reserva de emergência</li>
              <li><strong>Dívidas:</strong> cartão, empréstimos</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 3: Defina limites realistas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Baseado no seu raio-X, defina quanto você pode gastar em cada categoria. Seja honesto e realista. É melhor começar com metas alcançáveis do que criar um orçamento perfeito que você não vai seguir.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 4: Registre tudo (de forma simples)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você não precisa anotar cada centavo. Mas precisa ter uma visão geral. Use uma planilha simples ou um app. O importante é que seja fácil de usar e que você realmente use.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 5: Revise mensalmente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              No fim de cada mês, reserve 30 minutos para revisar: O que funcionou? O que não funcionou? Onde você gastou mais do que planejou? Ajuste para o próximo mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Dica bônus: Automatize o que puder
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Configure transferências automáticas para sua poupança logo após receber o salário. Assim você "paga a si mesmo primeiro" e não corre o risco de gastar tudo.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                Conclusão
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Organizar suas finanças não precisa ser complicado. Comece simples, seja consistente e ajuste conforme necessário. O importante é dar o primeiro passo hoje mesmo.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer uma planilha que faz tudo isso automaticamente?
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA organiza, categoriza e analisa seus gastos de forma inteligente
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
