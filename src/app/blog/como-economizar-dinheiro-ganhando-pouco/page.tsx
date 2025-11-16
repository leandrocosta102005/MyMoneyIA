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
              Como economizar dinheiro ganhando pouco
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
              "Eu ganho pouco, não consigo economizar." Essa é a frase que mais ouço. Mas a verdade é: não importa quanto você ganha, sempre dá para economizar algo. Vou te mostrar como.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              A verdade que ninguém quer ouvir
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O problema não é quanto você ganha. É quanto você gasta. Conheço pessoas que ganham R$ 10.000 e não sobra nada. E pessoas que ganham R$ 2.000 e conseguem guardar R$ 300. A diferença está nas escolhas.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Comece com 1% da sua renda
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sim, 1%. Se você ganha R$ 1.500, são R$ 15. Parece ridículo? Não é. É sobre criar o hábito. Depois de 2 meses, aumente para 2%. Depois 3%. Em 6 meses você está guardando 5-10% sem sentir.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Corte o que não agrega valor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não é sobre cortar tudo. É sobre cortar o que não importa:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Aquela assinatura que você não usa</li>
              <li>O delivery que você pede por preguiça</li>
              <li>As compras por impulso no mercado</li>
              <li>O cafezinho diário que virou hábito automático</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Use a regra do "espere 30 dias"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Quer comprar algo não essencial? Anote e espere 30 dias. Se depois de 30 dias você ainda quiser, compre. Mas 80% das vezes você vai perceber que nem queria tanto assim.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Aproveite o que é grátis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Existem muitas opções gratuitas que você não está usando:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Parques públicos em vez de shopping</li>
              <li>Biblioteca em vez de comprar livros</li>
              <li>Exercícios em casa em vez de academia</li>
              <li>Água em vez de refrigerante</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Cozinhe em casa (mesmo que simples)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Você não precisa ser chef. Arroz, feijão, ovo, frango. Simples e barato. Uma refeição em casa custa R$ 8-12. A mesma refeição fora custa R$ 25-35. Fazendo isso 5 dias por semana, você economiza R$ 400-600 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Negocie tudo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Internet, celular, seguros. Liga e pergunta se tem um plano mais barato. Diz que está pensando em cancelar. Muitas vezes eles oferecem desconto só para você não sair. Pode economizar R$ 50-150 por mês.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Busque renda extra (mesmo pequena)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não precisa ser um segundo emprego. Pode ser:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Vender coisas que você não usa</li>
              <li>Fazer freelas no fim de semana</li>
              <li>Dar aulas particulares do que você sabe</li>
              <li>Fazer bicos esporádicos</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Celebre cada pequena vitória
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Conseguiu guardar R$ 50 esse mês? Comemore. Não gastou com delivery essa semana? Comemore. Reconhecer o progresso mantém você motivado, mesmo quando é pouco.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O segredo está na consistência
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Economizar R$ 100 por mês pode parecer pouco. Mas em um ano são R$ 1.200. Em 5 anos, R$ 6.000. Mais do que muita gente que ganha o dobro consegue guardar. Não subestime o poder dos pequenos valores consistentes.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Organize suas finanças mesmo ganhando pouco
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA te ajuda a encontrar onde economizar, mesmo com renda limitada
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
