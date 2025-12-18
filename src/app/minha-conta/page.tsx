"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  DollarSign,
  User,
  Mail,
  Calendar,
  Crown,
  ArrowLeft,
  Edit2,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  LogOut
} from 'lucide-react';

export default function MinhaContaPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState<{ tipo: 'sucesso' | 'erro', texto: string } | null>(null);

  // Estados para edição
  const [nomeEdit, setNomeEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');

  useEffect(() => {
    const usuarioAtual = localStorage.getItem("usuarioAtual");
    
    if (!usuarioAtual) {
      router.push('/cadastro');
      return;
    }

    const user = JSON.parse(usuarioAtual);
    setUsuario(user);
    setNomeEdit(user.nome);
    setEmailEdit(user.email);
    setLoading(false);
  }, [router]);

  const handleSalvar = async () => {
    setSalvando(true);
    setMensagem(null);

    try {
      // Validações
      if (!nomeEdit.trim()) {
        setMensagem({ tipo: 'erro', texto: 'Nome não pode estar vazio' });
        setSalvando(false);
        return;
      }

      if (!emailEdit.trim() || !emailEdit.includes('@')) {
        setMensagem({ tipo: 'erro', texto: 'Email inválido' });
        setSalvando(false);
        return;
      }

      // Verificar se email já existe (se mudou)
      if (emailEdit !== usuario.email) {
        const usuariosStr = localStorage.getItem("usuarios");
        if (usuariosStr) {
          const usuarios = JSON.parse(usuariosStr);
          const emailExiste = usuarios.some((u: any) => u.email === emailEdit);
          if (emailExiste) {
            setMensagem({ tipo: 'erro', texto: 'Este email já está em uso' });
            setSalvando(false);
            return;
          }
        }
      }

      // Atualizar usuário
      const usuarioAtualizado = {
        ...usuario,
        nome: nomeEdit.trim(),
        email: emailEdit.trim()
      };

      // Salvar no localStorage
      localStorage.setItem("usuarioAtual", JSON.stringify(usuarioAtualizado));

      // Atualizar na lista de usuários
      const usuariosStr = localStorage.getItem("usuarios");
      if (usuariosStr) {
        const usuarios = JSON.parse(usuariosStr);
        const index = usuarios.findIndex((u: any) => u.email === usuario.email);
        if (index !== -1) {
          usuarios[index] = usuarioAtualizado;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
      }

      setUsuario(usuarioAtualizado);
      setEditando(false);
      setMensagem({ tipo: 'sucesso', texto: 'Dados atualizados com sucesso!' });

      // Limpar mensagem após 3 segundos
      setTimeout(() => setMensagem(null), 3000);
    } catch (err) {
      console.error('Erro ao salvar:', err);
      setMensagem({ tipo: 'erro', texto: 'Erro ao salvar dados. Tente novamente.' });
    } finally {
      setSalvando(false);
    }
  };

  const handleCancelar = () => {
    setNomeEdit(usuario.nome);
    setEmailEdit(usuario.email);
    setEditando(false);
    setMensagem(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioAtual");
    router.push('/');
  };

  const formatarData = (dataISO: string) => {
    if (!dataISO) return 'N/A';
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getNomePlano = (plano: string) => {
    const planos: Record<string, string> = {
      'mensal': 'Mensal',
      'anual': 'Anual',
      'vitalicio': 'Vitalício',
      'gratuito': 'Gratuito'
    };
    return planos[plano] || 'N/A';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27ae60] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

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

            <Link
              href="/area-restrita"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-all"
            >
              <ArrowLeft size={18} />
              Voltar ao Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1d3557] mb-4">
              Minha Conta
            </h1>
            <p className="text-xl text-gray-600">
              Gerencie suas informações pessoais e assinatura
            </p>
          </div>

          {/* Mensagem de Feedback */}
          {mensagem && (
            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              mensagem.tipo === 'sucesso' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {mensagem.tipo === 'sucesso' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="font-medium">{mensagem.texto}</span>
            </div>
          )}

          {/* Card de Informações Pessoais */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1d3557]">Informações Pessoais</h2>
              {!editando && (
                <button
                  onClick={() => setEditando(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-all"
                >
                  <Edit2 size={18} />
                  Editar
                </button>
              )}
            </div>

            <div className="space-y-6">
              {/* Nome */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User size={18} />
                  Nome Completo
                </label>
                {editando ? (
                  <input
                    type="text"
                    value={nomeEdit}
                    onChange={(e) => setNomeEdit(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                ) : (
                  <p className="text-lg text-gray-900 px-4 py-3 bg-gray-50 rounded-xl">
                    {usuario.nome}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Mail size={18} />
                  Email
                </label>
                {editando ? (
                  <input
                    type="email"
                    value={emailEdit}
                    onChange={(e) => setEmailEdit(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                ) : (
                  <p className="text-lg text-gray-900 px-4 py-3 bg-gray-50 rounded-xl">
                    {usuario.email}
                  </p>
                )}
              </div>

              {/* Botões de Ação (quando editando) */}
              {editando && (
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSalvar}
                    disabled={salvando}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#27ae60] text-white rounded-xl hover:bg-[#1d3557] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    {salvando ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Salvando...
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        Salvar Alterações
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleCancelar}
                    disabled={salvando}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    <X size={18} />
                    Cancelar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card de Assinatura */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1d3557] mb-6">Assinatura Atual</h2>

            <div className="space-y-6">
              {/* Plano Atual */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Plano Atual</p>
                    <p className="text-2xl font-bold">{getNomePlano(usuario.plano_atual)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">Status</p>
                  <p className="text-lg font-semibold">Ativo</p>
                </div>
              </div>

              {/* Data de Assinatura */}
              {usuario.data_assinatura && (
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={18} />
                    Data de Assinatura
                  </label>
                  <p className="text-lg text-gray-900 px-4 py-3 bg-gray-50 rounded-xl">
                    {formatarData(usuario.data_assinatura)}
                  </p>
                </div>
              )}

              {/* Botão Gerenciar Plano */}
              <Link
                href="/planos"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Alterar Plano
              </Link>
            </div>
          </div>

          {/* Zona de Perigo */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Zona de Perigo</h2>
            <p className="text-gray-600 mb-6">
              Ao sair, você precisará fazer login novamente para acessar sua conta.
            </p>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-semibold"
            >
              <LogOut size={18} />
              Sair da Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
