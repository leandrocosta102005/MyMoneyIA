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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Planejamento</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Como montar um orçamento simples e funcional
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
              A maioria dos orçamentos falha porque são complicados demais. Vou te mostrar um método simples que realmente funciona na vida real.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Esqueça o orçamento perfeito
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sabe aquele orçamento com 47 categorias diferentes? Esquece. Você não vai seguir. Ninguém segue. O segredo é simplicidade: quanto entra, quanto sai, quanto sobra. Pronto.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 1: Calcule sua renda real
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Não é quanto você ganha. É quanto realmente cai na sua conta. Se você é CLT, é o valor líquido. Se é autônomo, pegue a média dos últimos 3 meses. Seja realista, não otimista.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 2: Use a regra 50/30/20
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              É simples e funciona:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>50% para essenciais:</strong> moradia, alimentação, transporte, contas básicas</li>
              <li><strong>30% para estilo de vida:</strong> lazer, roupas, saídas, hobbies</li>
              <li><strong>20% para objetivos:</strong> poupança, investimentos, quitação de dívidas</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 3: Liste seus gastos fixos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anote tudo que você paga todo mês, sempre no mesmo valor: aluguel, condomínio, internet, celular, streaming, academia. Some tudo. Esse é seu "piso" de gastos.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 4: Estime os gastos variáveis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pegue a média dos últimos 3 meses de: mercado, transporte, alimentação fora, lazer. Não invente um número ideal. Use a realidade. Você pode melhorar depois, mas comece com a verdade.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 5: Faça as contas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agora é hora da verdade:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Renda - Gastos Fixos - Gastos Variáveis = ?</li>
              <li>Se sobrou: ótimo, você tem margem</li>
              <li>Se deu zero: você está no limite</li>
              <li>Se deu negativo: você está gastando mais do que ganha</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 6: Ajuste o necessário
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Se você está no vermelho, precisa cortar. Comece pelos gastos variáveis (são mais fáceis de controlar). Depois negocie os fixos. Última opção: aumentar a renda.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Passo 7: Revise mensalmente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              No fim do mês, compare: o que você planejou vs o que realmente gastou. Não se culpe se não foi perfeito. Ajuste e tente de novo. Orçamento é um processo, não um evento único.
            </p>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O segredo do orçamento que funciona
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Não é ser perfeito. É ser consistente. Um orçamento simples que você segue 80% do tempo é infinitamente melhor que um orçamento perfeito que você abandona na primeira semana.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Crie seu orçamento automaticamente
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA monta seu orçamento baseado nos seus gastos reais
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
