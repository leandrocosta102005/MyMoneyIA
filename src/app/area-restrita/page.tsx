"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  DollarSign,
  TrendingUp,
  Target,
  LogOut,
  User,
  BarChart3,
  ArrowRight,
  Star,
  BookOpen,
  PlusCircle,
  MinusCircle,
  Wallet,
  X
} from 'lucide-react';
import Link from 'next/link';

interface Transacao {
  id: string;
  tipo: 'receita' | 'despesa';
  descricao: string;
  valor: number;
  data: string;
  categoria: string;
}

interface Meta {
  id: string;
  titulo: string;
  valorAlvo: number;
  valorAtual: number;
  prazo: string;
}

export default function AreaRestrita() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mostrarMenuUsuario, setMostrarMenuUsuario] = useState(false);
  
  // Estados para transações
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [mostrarModalTransacao, setMostrarModalTransacao] = useState(false);
  const [tipoTransacao, setTipoTransacao] = useState<'receita' | 'despesa'>('receita');
  const [descricaoTransacao, setDescricaoTransacao] = useState('');
  const [valorTransacao, setValorTransacao] = useState('');
  const [categoriaTransacao, setCategoriaTransacao] = useState('');
  
  // Estados para metas
  const [metas, setMetas] = useState<Meta[]>([]);
  const [mostrarModalMeta, setMostrarModalMeta] = useState(false);
  const [tituloMeta, setTituloMeta] = useState('');
  const [valorAlvoMeta, setValorAlvoMeta] = useState('');
  const [prazoMeta, setPrazoMeta] = useState('');

  useEffect(() => {
    const checkUser = () => {
      const usuarioAtual = localStorage.getItem("usuarioAtual");
      
      if (!usuarioAtual) {
        router.push('/cadastro');
        return;
      }

      const user = JSON.parse(usuarioAtual);

      // Verificar se tem plano pago
      if (!user.plano_atual || user.plano_atual === 'gratuito') {
        router.push('/planos');
        return;
      }

      setUsuario(user);
      
      // Carregar transações do localStorage
      const transacoesSalvas = localStorage.getItem(`transacoes_${user.email}`);
      if (transacoesSalvas) {
        setTransacoes(JSON.parse(transacoesSalvas));
      }
      
      // Carregar metas do localStorage
      const metasSalvas = localStorage.getItem(`metas_${user.email}`);
      if (metasSalvas) {
        setMetas(JSON.parse(metasSalvas));
      }
      
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const calcularSaldo = () => {
    const receitas = transacoes
      .filter(t => t.tipo === 'receita')
      .reduce((acc, t) => acc + t.valor, 0);
    
    const despesas = transacoes
      .filter(t => t.tipo === 'despesa')
      .reduce((acc, t) => acc + t.valor, 0);
    
    return { receitas, despesas, saldo: receitas - despesas };
  };

  const adicionarTransacao = () => {
    if (!descricaoTransacao || !valorTransacao || !categoriaTransacao) {
      alert('Preencha todos os campos!');
      return;
    }

    const novaTransacao: Transacao = {
      id: Date.now().toString(),
      tipo: tipoTransacao,
      descricao: descricaoTransacao,
      valor: parseFloat(valorTransacao),
      data: new Date().toLocaleDateString('pt-BR'),
      categoria: categoriaTransacao
    };

    const novasTransacoes = [...transacoes, novaTransacao];
    setTransacoes(novasTransacoes);
    localStorage.setItem(`transacoes_${usuario.email}`, JSON.stringify(novasTransacoes));

    // Limpar formulário
    setDescricaoTransacao('');
    setValorTransacao('');
    setCategoriaTransacao('');
    setMostrarModalTransacao(false);
  };

  const removerTransacao = (id: string) => {
    const novasTransacoes = transacoes.filter(t => t.id !== id);
    setTransacoes(novasTransacoes);
    localStorage.setItem(`transacoes_${usuario.email}`, JSON.stringify(novasTransacoes));
  };

  const adicionarMeta = () => {
    if (!tituloMeta || !valorAlvoMeta || !prazoMeta) {
      alert('Preencha todos os campos!');
      return;
    }

    const novaMeta: Meta = {
      id: Date.now().toString(),
      titulo: tituloMeta,
      valorAlvo: parseFloat(valorAlvoMeta),
      valorAtual: 0,
      prazo: prazoMeta
    };

    const novasMetas = [...metas, novaMeta];
    setMetas(novasMetas);
    localStorage.setItem(`metas_${usuario.email}`, JSON.stringify(novasMetas));

    // Limpar formulário
    setTituloMeta('');
    setValorAlvoMeta('');
    setPrazoMeta('');
    setMostrarModalMeta(false);
  };

  const atualizarMeta = (id: string, novoValor: number) => {
    const metasAtualizadas = metas.map(m => 
      m.id === id ? { ...m, valorAtual: novoValor } : m
    );
    setMetas(metasAtualizadas);
    localStorage.setItem(`metas_${usuario.email}`, JSON.stringify(metasAtualizadas));
  };

  const removerMeta = (id: string) => {
    const novasMetas = metas.filter(m => m.id !== id);
    setMetas(novasMetas);
    localStorage.setItem(`metas_${usuario.email}`, JSON.stringify(novasMetas));
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioAtual");
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27ae60] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  const { receitas, despesas, saldo } = calcularSaldo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-[#27ae60]" />
              <span className="text-2xl font-bold text-[#1d3557]">MyMoneyIA</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-gray-600 hidden sm:inline">Olá, {usuario?.nome}!</span>

              {/* Menu do Usuário */}
              <div className="relative">
                <button
                  onClick={() => setMostrarMenuUsuario(!mostrarMenuUsuario)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-colors"
                >
                  <User size={18} />
                  <span className="hidden sm:inline">Minha Conta</span>
                </button>

                {mostrarMenuUsuario && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    <Link
                      href="/minha-conta"
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                    >
                      <User size={18} />
                      Minha Conta
                    </Link>
                    <button
                      onClick={() => alert('E-book disponível em breve!')}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                    >
                      <BookOpen size={18} />
                      Acessar E-book
                    </button>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 flex items-center gap-3"
                    >
                      <LogOut size={18} />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Boas-vindas */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1d3557] mb-4">
              Bem-vindo, {usuario?.nome}!
            </h1>
            <p className="text-xl text-gray-600">
              Controle total das suas finanças em um só lugar
            </p>
            <div className="mt-4 inline-block bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white px-6 py-2 rounded-full font-semibold">
              Plano: {usuario?.plano_atual === 'mensal' ? 'Mensal' : usuario?.plano_atual === 'anual' ? 'Anual' : 'Vitalício'}
            </div>
          </div>

          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Receitas</p>
                  <p className="text-2xl font-bold text-[#1d3557]">R$ {receitas.toFixed(2)}</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setTipoTransacao('receita');
                  setMostrarModalTransacao(true);
                }}
                className="text-sm text-[#27ae60] font-semibold hover:underline flex items-center gap-1"
              >
                <PlusCircle size={16} />
                Adicionar receita
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <MinusCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Despesas</p>
                  <p className="text-2xl font-bold text-[#1d3557]">R$ {despesas.toFixed(2)}</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setTipoTransacao('despesa');
                  setMostrarModalTransacao(true);
                }}
                className="text-sm text-red-600 font-semibold hover:underline flex items-center gap-1"
              >
                <MinusCircle size={16} />
                Adicionar despesa
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Saldo</p>
                  <p className={`text-2xl font-bold ${saldo >= 0 ? 'text-[#27ae60]' : 'text-red-600'}`}>
                    R$ {saldo.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                {transacoes.length === 0 ? 'Comece adicionando transações' : `${transacoes.length} transações registradas`}
              </p>
            </div>
          </div>

          {/* Área de Conteúdo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Transações Recentes */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1d3557]">Transações Recentes</h2>
                <BarChart3 className="w-6 h-6 text-[#27ae60]" />
              </div>

              {transacoes.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">Nenhuma transação registrada ainda</p>
                  <button 
                    onClick={() => setMostrarModalTransacao(true)}
                    className="px-6 py-3 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-all font-semibold"
                  >
                    Adicionar primeira transação
                  </button>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {transacoes.slice().reverse().map((transacao) => (
                    <div key={transacao.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transacao.tipo === 'receita' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transacao.tipo === 'receita' ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <MinusCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[#1d3557]">{transacao.descricao}</p>
                          <p className="text-sm text-gray-500">{transacao.categoria} • {transacao.data}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className={`font-bold ${transacao.tipo === 'receita' ? 'text-green-600' : 'text-red-600'}`}>
                          {transacao.tipo === 'receita' ? '+' : '-'} R$ {transacao.valor.toFixed(2)}
                        </p>
                        <button
                          onClick={() => removerTransacao(transacao.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Metas Financeiras */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1d3557]">Metas Financeiras</h2>
                <Target className="w-6 h-6 text-[#27ae60]" />
              </div>

              {metas.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-4">Nenhuma meta definida ainda</p>
                  <button 
                    onClick={() => setMostrarModalMeta(true)}
                    className="px-6 py-3 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-all font-semibold"
                  >
                    Criar primeira meta
                  </button>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {metas.map((meta) => {
                    const progresso = (meta.valorAtual / meta.valorAlvo) * 100;
                    return (
                      <div key={meta.id} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-[#1d3557]">{meta.titulo}</h3>
                          <button
                            onClick={() => removerMeta(meta.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Prazo: {meta.prazo}</p>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">R$ {meta.valorAtual.toFixed(2)}</span>
                            <span className="text-gray-600">R$ {meta.valorAlvo.toFixed(2)}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#27ae60] h-2 rounded-full transition-all"
                              style={{ width: `${Math.min(progresso, 100)}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 text-center">{progresso.toFixed(0)}% concluído</p>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            placeholder="Adicionar valor"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                const valor = parseFloat(input.value);
                                if (valor > 0) {
                                  atualizarMeta(meta.id, meta.valorAtual + valor);
                                  input.value = '';
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Ações Rápidas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1d3557] mb-6 text-center">
              Recursos Disponíveis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => alert('Chat com IA disponível em breve!')}
                className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <Star className="w-6 h-6" />
                <span className="font-semibold">Chat com IA</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => alert('E-book exclusivo disponível em breve!')}
                className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <BookOpen className="w-6 h-6" />
                <span className="font-semibold">E-book Exclusivo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => alert('Relatórios detalhados disponíveis em breve!')}
                className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <BarChart3 className="w-6 h-6" />
                <span className="font-semibold">Ver Relatórios</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Adicionar Transação */}
      {mostrarModalTransacao && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#1d3557]">
                Adicionar {tipoTransacao === 'receita' ? 'Receita' : 'Despesa'}
              </h3>
              <button onClick={() => setMostrarModalTransacao(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição</label>
                <input
                  type="text"
                  value={descricaoTransacao}
                  onChange={(e) => setDescricaoTransacao(e.target.value)}
                  placeholder="Ex: Salário, Aluguel, Compras..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Valor (R$)</label>
                <input
                  type="number"
                  value={valorTransacao}
                  onChange={(e) => setValorTransacao(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria</label>
                <select
                  value={categoriaTransacao}
                  onChange={(e) => setCategoriaTransacao(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                >
                  <option value="">Selecione uma categoria</option>
                  {tipoTransacao === 'receita' ? (
                    <>
                      <option value="Salário">Salário</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Investimentos">Investimentos</option>
                      <option value="Outros">Outros</option>
                    </>
                  ) : (
                    <>
                      <option value="Alimentação">Alimentação</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Moradia">Moradia</option>
                      <option value="Saúde">Saúde</option>
                      <option value="Educação">Educação</option>
                      <option value="Lazer">Lazer</option>
                      <option value="Outros">Outros</option>
                    </>
                  )}
                </select>
              </div>

              <button
                onClick={adicionarTransacao}
                className="w-full py-3 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-all font-semibold"
              >
                Adicionar {tipoTransacao === 'receita' ? 'Receita' : 'Despesa'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Adicionar Meta */}
      {mostrarModalMeta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#1d3557]">Criar Meta Financeira</h3>
              <button onClick={() => setMostrarModalMeta(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Título da Meta</label>
                <input
                  type="text"
                  value={tituloMeta}
                  onChange={(e) => setTituloMeta(e.target.value)}
                  placeholder="Ex: Viagem, Carro novo, Reserva de emergência..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Valor Alvo (R$)</label>
                <input
                  type="number"
                  value={valorAlvoMeta}
                  onChange={(e) => setValorAlvoMeta(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Prazo</label>
                <input
                  type="text"
                  value={prazoMeta}
                  onChange={(e) => setPrazoMeta(e.target.value)}
                  placeholder="Ex: 12 meses, 2024, Dezembro..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                />
              </div>

              <button
                onClick={adicionarMeta}
                className="w-full py-3 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-all font-semibold"
              >
                Criar Meta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
