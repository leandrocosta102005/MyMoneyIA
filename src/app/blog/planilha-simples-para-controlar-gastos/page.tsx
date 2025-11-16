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
            <span className="text-sm font-bold text-[#27ae60] uppercase">Ferramentas</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d3557] mt-4 mb-6">
              Planilha simples para controlar gastos
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
              Você não precisa de uma planilha complexa com 50 abas e fórmulas complicadas. Precisa de algo simples que você realmente vai usar. Vou te mostrar como criar uma planilha funcional em 10 minutos.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Por que usar planilha?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Apps são ótimos, mas planilhas te dão controle total. Você vê tudo de uma vez, personaliza como quiser e não depende de ninguém. Além disso, o ato de preencher manualmente te faz mais consciente dos gastos.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Estrutura básica (3 abas apenas)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Aba 1 - Resumo Mensal:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Renda total do mês</li>
              <li>Total de gastos</li>
              <li>Saldo (renda - gastos)</li>
              <li>Gráfico simples de pizza com categorias</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Aba 2 - Registro de Gastos:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Data</li>
              <li>Descrição</li>
              <li>Categoria</li>
              <li>Valor</li>
              <li>Forma de pagamento</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Aba 3 - Metas:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Nome da meta</li>
              <li>Valor total</li>
              <li>Valor já guardado</li>
              <li>Quanto falta</li>
              <li>Prazo</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Categorias essenciais (máximo 7)
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Moradia (aluguel, condomínio, contas)</li>
              <li>Alimentação (mercado, delivery)</li>
              <li>Transporte (combustível, uber, ônibus)</li>
              <li>Saúde (remédios, consultas)</li>
              <li>Lazer (saídas, hobbies)</li>
              <li>Pessoal (roupas, beleza)</li>
              <li>Outros</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Como usar no dia a dia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Opção 1 - Diária:</strong> Registre cada gasto no fim do dia (5 minutos)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Opção 2 - Semanal:</strong> Reserve 15 minutos toda sexta para registrar a semana
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Escolha o que funciona melhor para você. O importante é ser consistente.
            </p>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Fórmulas básicas que você precisa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não precisa ser expert em Excel. Essas 3 fórmulas resolvem:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>=SOMA()</strong> para somar valores</li>
              <li><strong>=SOMASE()</strong> para somar por categoria</li>
              <li><strong>=MÉDIA()</strong> para calcular médias</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1d3557] mt-8 mb-4">
              Dicas para manter a consistência
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Deixe a planilha sempre aberta no computador</li>
              <li>Configure um lembrete semanal no celular</li>
              <li>Comemore quando completar 30 dias consecutivos</li>
              <li>Não se cobre perfeição, só consistência</li>
            </ul>

            <div className="bg-gradient-to-r from-[#27ae60]/10 to-[#1d3557]/10 p-6 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-[#1d3557] mb-3">
                O segredo está na simplicidade
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Uma planilha simples que você usa todo dia é infinitamente melhor que uma planilha complexa que você abandona na primeira semana. Comece simples, ajuste conforme necessário.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer uma planilha pronta e inteligente?
            </h3>
            <p className="text-white/90 mb-6">
              A MyMoneyIA já vem com tudo configurado, categorias automáticas e análises com IA
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
