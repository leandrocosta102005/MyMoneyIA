"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  DollarSign, 
  TrendingDown, 
  Target, 
  AlertCircle, 
  Calendar,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Loader2,
  Shield,
} from "lucide-react";

interface QuizData {
  rendaMensal: string;
  tempoOrganizar: string;
  principalDificuldade: string[];
  objetivoFinanceiro: string;
}

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({
    rendaMensal: "",
    tempoOrganizar: "",
    principalDificuldade: [],
    objetivoFinanceiro: "",
  });

  const toggleDificuldade = (dificuldade: string) => {
    setQuizData(prev => {
      const current = prev.principalDificuldade;
      if (current.includes(dificuldade)) {
        return { ...prev, principalDificuldade: current.filter(d => d !== dificuldade) };
      } else {
        return { ...prev, principalDificuldade: [...current, dificuldade] };
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const queryParams = new URLSearchParams({
      renda: quizData.rendaMensal,
      tempo: quizData.tempoOrganizar,
      dificuldades: quizData.principalDificuldade.join(','),
      objetivo: quizData.objetivoFinanceiro,
    });
    
    router.push(`/resultado?${queryParams.toString()}`);
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header com Navegação */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-[#27ae60]" />
              <span className="text-2xl font-bold text-[#1d3557]">MyMoneyIA</span>
            </Link>
            
            <nav className="hidden md:flex gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg font-medium bg-[#27ae60] text-white transition-all"
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
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
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

            {/* Menu Mobile */}
            <div className="md:hidden">
              <select
                onChange={(e) => router.push(e.target.value)}
                className="px-3 py-2 border-2 border-gray-200 rounded-lg font-medium text-gray-700"
                defaultValue="/"
              >
                <option value="/">Quiz Financeiro</option>
                <option value="/oferecemos">O que Oferecemos</option>
                <option value="/chat-ia">Chat com IA</option>
                <option value="/cadastro">Cadastro</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo do Quiz */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#27ae60]/10 text-[#27ae60] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              Vamos personalizar sua experiência
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3557] mb-4">
              Conte-nos sobre suas finanças
            </h1>
            <p className="text-lg text-gray-600">
              Responda 4 perguntas rápidas para receber um plano personalizado
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Pergunta {step} de {totalSteps}</span>
              <span className="text-sm font-medium text-[#27ae60]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <DollarSign className="w-16 h-16 text-[#27ae60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#1d3557] mb-2">
                    Qual é a sua renda mensal aproximada?
                  </h2>
                  <p className="text-gray-600">
                    Isso nos ajuda a criar metas realistas para você
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "ate-2000", label: "Até R$ 2.000" },
                    { value: "2000-4000", label: "R$ 2.000 - R$ 4.000" },
                    { value: "4000-6000", label: "R$ 4.000 - R$ 6.000" },
                    { value: "6000-10000", label: "R$ 6.000 - R$ 10.000" },
                    { value: "acima-10000", label: "Acima de R$ 10.000" },
                    { value: "variavel", label: "Renda variável" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setQuizData({ ...quizData, rendaMensal: option.value });
                        setTimeout(() => setStep(2), 300);
                      }}
                      className={`p-6 border-2 rounded-2xl text-left transition-all hover:shadow-lg hover:scale-105 ${
                        quizData.rendaMensal === option.value
                          ? "border-[#27ae60] bg-[#27ae60]/5"
                          : "border-gray-200 hover:border-[#27ae60]/50"
                      }`}
                    >
                      <p className="font-semibold text-lg text-gray-900">{option.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 text-[#27ae60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#1d3557] mb-2">
                    Há quanto tempo você tenta organizar suas finanças?
                  </h2>
                  <p className="text-gray-600">
                    Queremos entender sua jornada
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "primeira-vez", label: "É a primeira vez", icon: Sparkles },
                    { value: "meses", label: "Há alguns meses", icon: Calendar },
                    { value: "anos", label: "Há anos", icon: TrendingDown },
                    { value: "sempre", label: "Sempre tentei", icon: Target },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setQuizData({ ...quizData, tempoOrganizar: option.value });
                        setTimeout(() => setStep(3), 300);
                      }}
                      className={`p-6 border-2 rounded-2xl text-left transition-all hover:shadow-lg hover:scale-105 ${
                        quizData.tempoOrganizar === option.value
                          ? "border-[#27ae60] bg-[#27ae60]/5"
                          : "border-gray-200 hover:border-[#27ae60]/50"
                      }`}
                    >
                      <option.icon 
                        className={`mb-3 ${
                          quizData.tempoOrganizar === option.value ? "text-[#27ae60]" : "text-gray-400"
                        }`} 
                        size={32} 
                      />
                      <p className="font-semibold text-lg text-gray-900">{option.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <AlertCircle className="w-16 h-16 text-[#27ae60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#1d3557] mb-2">
                    Quais são suas maiores dificuldades?
                  </h2>
                  <p className="text-gray-600">
                    Selecione todas que se aplicam
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { value: "nao-sei-onde-gasto", label: "Não sei para onde meu dinheiro vai" },
                    { value: "dividas", label: "Estou endividado" },
                    { value: "nao-sobra", label: "Nunca sobra dinheiro no fim do mês" },
                    { value: "sem-controle", label: "Não consigo me controlar" },
                    { value: "planilhas-complicadas", label: "Planilhas são muito complicadas" },
                    { value: "sem-metas", label: "Não tenho metas financeiras" },
                    { value: "renda-variavel", label: "Minha renda varia muito" },
                    { value: "familia", label: "Preciso organizar finanças da família" },
                  ].map((dificuldade) => (
                    <button
                      key={dificuldade.value}
                      type="button"
                      onClick={() => toggleDificuldade(dificuldade.value)}
                      className={`w-full p-4 border-2 rounded-2xl text-left transition-all hover:shadow-md ${
                        quizData.principalDificuldade.includes(dificuldade.value)
                          ? "border-[#27ae60] bg-[#27ae60]/5"
                          : "border-gray-200 hover:border-[#27ae60]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          quizData.principalDificuldade.includes(dificuldade.value)
                            ? "border-[#27ae60] bg-[#27ae60]"
                            : "border-gray-300"
                        }`}>
                          {quizData.principalDificuldade.includes(dificuldade.value) && (
                            <CheckCircle className="text-white" size={16} />
                          )}
                        </div>
                        <p className="font-medium text-gray-900">{dificuldade.label}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(4)}
                  disabled={quizData.principalDificuldade.length === 0}
                  className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Continuar
                  <ArrowRight size={20} />
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <Target className="w-16 h-16 text-[#27ae60] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#1d3557] mb-2">
                    Qual é o seu principal objetivo?
                  </h2>
                  <p className="text-gray-600">
                    Vamos focar nisso primeiro
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "sair-dividas", label: "Sair das dívidas", icon: TrendingDown },
                    { value: "economizar", label: "Começar a economizar", icon: DollarSign },
                    { value: "ter-clareza", label: "Ter clareza financeira", icon: Sparkles },
                    { value: "criar-reserva", label: "Criar reserva de emergência", icon: Shield },
                    { value: "realizar-sonho", label: "Realizar um sonho específico", icon: Target },
                    { value: "organizar-vida", label: "Organizar minha vida financeira", icon: CheckCircle },
                  ].map((objetivo) => (
                    <button
                      key={objetivo.value}
                      type="button"
                      onClick={() => setQuizData({ ...quizData, objetivoFinanceiro: objetivo.value })}
                      className={`p-6 border-2 rounded-2xl text-left transition-all hover:shadow-lg hover:scale-105 ${
                        quizData.objetivoFinanceiro === objetivo.value
                          ? "border-[#27ae60] bg-[#27ae60]/5"
                          : "border-gray-200 hover:border-[#27ae60]/50"
                      }`}
                    >
                      <objetivo.icon 
                        className={`mb-3 ${
                          quizData.objetivoFinanceiro === objetivo.value ? "text-[#27ae60]" : "text-gray-400"
                        }`} 
                        size={32} 
                      />
                      <p className="font-semibold text-lg text-gray-900">{objetivo.label}</p>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!quizData.objetivoFinanceiro || loading}
                  className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analisando suas respostas...
                    </>
                  ) : (
                    <>
                      Ver meu plano personalizado
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {step > 1 && step < 4 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setStep(step - 1)}
                className="text-gray-600 hover:text-[#27ae60] font-medium transition-colors"
              >
                ← Voltar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
