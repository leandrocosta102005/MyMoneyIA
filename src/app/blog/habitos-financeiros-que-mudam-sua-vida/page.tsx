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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Hábitos</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Hábitos financeiros que mudam sua vida
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
              Sua situação financeira não muda com grandes decisões. Muda com pequenos hábitos diários repetidos consistentemente. Aqui estão os hábitos que realmente fazem diferença.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              1. Pague a si mesmo primeiro
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Assim que receber seu salário, transfira 10-20% para uma conta separada. Não espere sobrar no fim do mês (nunca vai sobrar). Trate sua poupança como uma conta obrigatória, não opcional.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              2. Revise seus gastos semanalmente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Reserve 15 minutos toda sexta-feira para revisar a semana. Não precisa ser perfeito. Só precisa ser consistente. Esse hábito sozinho pode economizar R$ 300-500 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              3. Espere 24h antes de comprar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Qualquer compra acima de R$ 100: espere 24 horas. Adicione ao carrinho, mas não finalize. Você vai perceber que 70% das vezes o impulso passa e você nem queria tanto aquilo.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              4. Automatize tudo que puder
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Poupança automática, pagamento de contas, investimentos. Quanto menos decisões você precisar tomar, melhor. Automatize e esqueça. Seu eu futuro agradece.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              5. Use a regra do "um entra, um sai"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprou uma roupa nova? Doe uma antiga. Comprou um livro? Doe outro. Isso evita acúmulo desnecessário e te faz pensar duas vezes antes de comprar.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              6. Celebre pequenas vitórias
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Economizou R$ 100 esse mês? Comemore (sem gastar tudo, claro). Pagou uma dívida? Celebre. Reconhecer o progresso mantém você motivado.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              7. Aprenda algo novo sobre dinheiro todo mês
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Leia um artigo, assista um vídeo, ouça um podcast. Educação financeira é um processo contínuo. Quanto mais você aprende, melhores decisões você toma.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O poder dos hábitos compostos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cada um desses hábitos sozinho parece pequeno. Mas juntos, praticados consistentemente por 6 meses, podem transformar completamente sua vida financeira. Não subestime o poder da consistência.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Construa hábitos financeiros saudáveis
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA te ajuda a manter a consistência com lembretes e análises automáticas
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
