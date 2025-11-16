"use client";

import { useState } from "react";
import { DollarSign, Bot, Send, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ChatIAPage() {
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([
    {
      role: "assistant",
      content:
        "Olá! Sou a IA do MyMoneyIA. Como posso ajudar você com suas finanças hoje?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setChatLoading(true);

    // Simular resposta da IA
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const respostas: Record<string, string> = {
      divida:
        "Para sair das dívidas, recomendo: 1) Liste todas as dívidas com juros; 2) Priorize as de maior juros; 3) Negocie descontos; 4) Crie um orçamento focado em pagamento. O MyMoneyIA pode automatizar esse controle!",
      economizar:
        "Para começar a economizar: 1) Aplique a regra 50/30/20; 2) Pague-se primeiro (separe 10% assim que receber); 3) Corte gastos supérfluos; 4) Automatize transferências. Nossa planilha IA facilita tudo isso!",
      investir:
        "Para investir com segurança: 1) Crie reserva de emergência (6 meses); 2) Estude sobre Tesouro Direto e fundos; 3) Diversifique investimentos; 4) Comece pequeno e seja consistente.",
      controlar:
        "Para controlar gastos: 1) Registre TUDO por 30 dias; 2) Categorize automaticamente; 3) Identifique vazamentos; 4) Estabeleça limites por categoria. O MyMoneyIA faz isso automaticamente!",
      default:
        "Entendo sua dúvida! Para te ajudar melhor, pode me contar mais detalhes sobre sua situação financeira? Estou aqui para resolver seus problemas com dívidas, economia, investimentos e controle financeiro.",
    };

    let resposta = respostas.default;
    const msgLower = userMessage.toLowerCase();

    if (msgLower.includes("divida") || msgLower.includes("dívida")) {
      resposta = respostas.divida;
    } else if (msgLower.includes("economizar") || msgLower.includes("poupar")) {
      resposta = respostas.economizar;
    } else if (
      msgLower.includes("investir") ||
      msgLower.includes("investimento")
    ) {
      resposta = respostas.investir;
    } else if (msgLower.includes("controlar") || msgLower.includes("gasto")) {
      resposta = respostas.controlar;
    }

    setMessages((prev) => [...prev, { role: "assistant", content: resposta }]);
    setChatLoading(false);
  };

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

            <nav className="hidden md:flex gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                Quiz Financeiro
              </Link>
              <Link
                href="/oferecemos"
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                O que Oferecemos
              </Link>
              <Link
                href="/chat-ia"
                className="px-4 py-2 rounded-lg font-medium bg-[#27ae60] text-white transition-all"
              >
                Chat com IA
              </Link>
              <Link
                href="/cadastro"
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                Cadastro
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#27ae60] rounded-full mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              Chat com IA Financeira
            </h1>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas sobre finanças, dívidas, investimentos e muito
              mais
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Área de mensagens */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                      message.role === "user"
                        ? "bg-[#27ae60] text-white"
                        : "bg-white text-gray-800 shadow-md"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-5 h-5 text-[#27ae60]" />
                        <span className="font-semibold text-[#27ae60]">
                          IA MyMoneyIA
                        </span>
                      </div>
                    )}
                    <p className="leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 text-[#27ae60] animate-spin" />
                      <span className="text-gray-600">Pensando...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input de mensagem */}
            <div className="p-6 bg-white border-t-2 border-gray-100">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Digite sua dúvida financeira..."
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#27ae60] text-gray-800"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || chatLoading}
                  className="px-8 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Pergunte sobre: dívidas, economia, investimentos, controle de
                gastos, orçamento...
              </p>
            </div>
          </div>

          {/* Sugestões de perguntas */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#1d3557] mb-4">
              Perguntas frequentes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                onClick={() =>
                  setInputMessage("Como posso sair das dívidas rapidamente?")
                }
                className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-[#27ae60] hover:bg-[#27ae60]/5 transition-all"
              >
                <p className="font-medium text-gray-800">
                  Como sair das dívidas?
                </p>
              </button>
              <button
                onClick={() =>
                  setInputMessage("Qual a melhor forma de começar a economizar?")
                }
                className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-[#27ae60] hover:bg-[#27ae60]/5 transition-all"
              >
                <p className="font-medium text-gray-800">
                  Como começar a economizar?
                </p>
              </button>
              <button
                onClick={() =>
                  setInputMessage("Como investir com segurança?")
                }
                className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-[#27ae60] hover:bg-[#27ae60]/5 transition-all"
              >
                <p className="font-medium text-gray-800">
                  Como investir com segurança?
                </p>
              </button>
              <button
                onClick={() =>
                  setInputMessage("Como controlar meus gastos mensais?")
                }
                className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-[#27ae60] hover:bg-[#27ae60]/5 transition-all"
              >
                <p className="font-medium text-gray-800">
                  Como controlar gastos?
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
