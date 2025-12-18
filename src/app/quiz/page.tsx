"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DollarSign, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  pergunta: string;
  opcoes: string[];
}

const perguntas: Question[] = [
  {
    id: 1,
    pergunta: "Qual é sua situação financeira atual?",
    opcoes: [
      "Tenho dívidas e não consigo pagar",
      "Consigo pagar as contas, mas não sobra nada",
      "Sobra um pouco, mas não tenho controle",
      "Tenho controle e consigo poupar regularmente",
    ],
  },
  {
    id: 2,
    pergunta: "Qual é seu principal objetivo financeiro?",
    opcoes: [
      "Sair das dívidas",
      "Criar uma reserva de emergência",
      "Economizar para um objetivo específico (casa, carro, viagem)",
      "Investir e fazer meu dinheiro render",
    ],
  },
  {
    id: 3,
    pergunta: "Como você controla seus gastos atualmente?",
    opcoes: [
      "Não controlo, não sei para onde vai meu dinheiro",
      "Tento controlar mentalmente, mas perco a conta",
      "Uso planilhas ou anotações, mas não é consistente",
      "Tenho um sistema organizado e acompanho regularmente",
    ],
  },
  {
    id: 4,
    pergunta: "Qual é sua renda mensal aproximada?",
    opcoes: [
      "Até R$ 2.000",
      "De R$ 2.001 a R$ 5.000",
      "De R$ 5.001 a R$ 10.000",
      "Acima de R$ 10.000",
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(false);

  // Verificar se usuário está logado
  useEffect(() => {
    const usuarioAtual = localStorage.getItem("usuarioAtual");
    if (!usuarioAtual) {
      router.push("/cadastro");
      return;
    }

    // Verificar se já completou o quiz
    const usuario = JSON.parse(usuarioAtual);
    if (usuario.quiz_completo) {
      // Se já completou, redireciona para planos
      router.push("/planos");
    }
  }, [router]);

  const perguntaAtual = perguntas[etapaAtual];
  const progresso = ((etapaAtual + 1) / perguntas.length) * 100;

  const handleResposta = (resposta: string) => {
    setRespostas({ ...respostas, [perguntaAtual.id]: resposta });
  };

  const proximaPergunta = () => {
    if (etapaAtual < perguntas.length - 1) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const perguntaAnterior = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  const finalizarQuiz = async () => {
    setLoading(true);

    // Salvar respostas no localStorage
    localStorage.setItem("quizRespostas", JSON.stringify(respostas));

    // Atualizar usuário para marcar quiz como completo
    const usuarioAtual = localStorage.getItem("usuarioAtual");
    if (usuarioAtual) {
      const usuario = JSON.parse(usuarioAtual);
      usuario.quiz_completo = true;
      
      // Atualizar usuário atual
      localStorage.setItem("usuarioAtual", JSON.stringify(usuario));
      
      // Atualizar na lista de usuários
      const usuariosStr = localStorage.getItem("usuarios");
      if (usuariosStr) {
        const usuarios = JSON.parse(usuariosStr);
        const index = usuarios.findIndex((u: any) => u.email === usuario.email);
        if (index !== -1) {
          usuarios[index] = usuario;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
      }
    }

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirecionar para página de planos
    router.push("/planos");
  };

  const respostaAtualSelecionada = respostas[perguntaAtual.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-[#27ae60]" />
              <span className="text-2xl font-bold text-[#1d3557]">
                MyMoneyIA
              </span>
            </Link>

            <div className="text-sm text-gray-600">
              Pergunta {etapaAtual + 1} de {perguntas.length}
            </div>
          </div>
        </div>
      </header>

      {/* Barra de Progresso */}
      <div className="bg-gray-200 h-2">
        <div
          className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] h-2 transition-all duration-500"
          style={{ width: `${progresso}%` }}
        />
      </div>

      {/* Conteúdo */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            {/* Pergunta */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#27ae60]/10 text-[#27ae60] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Pergunta {etapaAtual + 1}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d3557] mb-2">
                {perguntaAtual.pergunta}
              </h2>
              <p className="text-gray-600">
                Selecione a opção que melhor descreve sua situação
              </p>
            </div>

            {/* Opções */}
            <div className="space-y-4 mb-8">
              {perguntaAtual.opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => handleResposta(opcao)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all hover:scale-102 ${
                    respostaAtualSelecionada === opcao
                      ? "border-[#27ae60] bg-[#27ae60]/5 shadow-lg"
                      : "border-gray-200 hover:border-[#27ae60]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        respostaAtualSelecionada === opcao
                          ? "border-[#27ae60] bg-[#27ae60]"
                          : "border-gray-300"
                      }`}
                    >
                      {respostaAtualSelecionada === opcao && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span
                      className={`text-lg ${
                        respostaAtualSelecionada === opcao
                          ? "text-[#1d3557] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {opcao}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navegação */}
            <div className="flex gap-4">
              {etapaAtual > 0 && (
                <button
                  onClick={perguntaAnterior}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#27ae60] hover:text-[#27ae60] transition-all"
                >
                  <ArrowLeft size={20} />
                  Anterior
                </button>
              )}

              {etapaAtual < perguntas.length - 1 ? (
                <button
                  onClick={proximaPergunta}
                  disabled={!respostaAtualSelecionada}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Próxima
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={finalizarQuiz}
                  disabled={!respostaAtualSelecionada || loading}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>Analisando suas respostas...</>
                  ) : (
                    <>
                      Ver Planos Disponíveis
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Informação Extra */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              🔒 Suas respostas são confidenciais e usadas apenas para criar
              seu plano personalizado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
