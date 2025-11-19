"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Target,
  Calendar,
  Download,
  MessageCircle,
  BookOpen,
  Award,
  Settings,
  LogOut,
  BarChart3,
  Wallet,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Send,
  Plus,
  Trash2,
  Edit,
  FileText,
  TrendingDown,
  Save,
  X,
  Check,
  Search,
  Filter,
  ShoppingCart,
  Home,
  Car,
  Utensils,
  Plane,
  Heart,
  Zap,
  Coffee,
  Smartphone,
  GraduationCap,
  Gift
} from "lucide-react";
import Link from "next";

// Tipos
interface Transacao {
  id: number;
  tipo: "receita" | "despesa";
  descricao: string;
  valor: number;
  data: string;
  categoria: string;
}

interface Meta {
  id: number;
  titulo: string;
  valor: number;
  atual: number;
  categoria: string;
  prazo?: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Componente de Toast
const Toast = ({ message, type, onClose }: { message: string; type: "success" | "error" | "info"; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500";
  const icon = type === "success" ? <CheckCircle className="w-5 h-5" /> : type === "error" ? <AlertCircle className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />;

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top z-50`}>
      {icon}
      <span className="font-semibold">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-80">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Modal de Transação - RESPONSIVO
const ModalTransacao = ({ 
  isOpen, 
  onClose, 
  onSave, 
  transacao 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSave: (transacao: Omit<Transacao, "id">) => void;
  transacao?: Transacao;
}) => {
  const [tipo, setTipo] = useState<"receita" | "despesa">(transacao?.tipo || "despesa");
  const [descricao, setDescricao] = useState(transacao?.descricao || "");
  const [valor, setValor] = useState(transacao?.valor.toString() || "");
  const [categoria, setCategoria] = useState(transacao?.categoria || "");
  const [data, setData] = useState(transacao?.data || new Date().toISOString().split('T')[0]);

  const categorias = {
    receita: ["Salário", "Freelance", "Investimentos", "Vendas", "Bônus", "Outros"],
    despesa: ["Alimentação", "Transporte", "Moradia", "Saúde", "Educação", "Lazer", "Compras", "Contas", "Outros"]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descricao || !valor || !categoria) return;
    
    onSave({
      tipo,
      descricao,
      valor: parseFloat(valor),
      data: new Date(data).toLocaleDateString('pt-BR'),
      categoria
    });
    
    // Reset form
    setDescricao("");
    setValor("");
    setCategoria("");
    setData(new Date().toISOString().split('T')[0]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-6 animate-in zoom-in-95">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1d3557]">
            {transacao ? "Editar Transação" : "Nova Transação"}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Tipo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTipo("receita")}
                className={`p-2 sm:p-3 rounded-xl font-semibold text-sm transition-all ${
                  tipo === "receita" 
                    ? "bg-green-500 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                Receita
              </button>
              <button
                type="button"
                onClick={() => setTipo("despesa")}
                className={`p-2 sm:p-3 rounded-xl font-semibold text-sm transition-all ${
                  tipo === "despesa" 
                    ? "bg-red-500 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1 sm:mr-2" />
                Despesa
              </button>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição</label>
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Ex: Supermercado, Salário, Aluguel..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            />
          </div>

          {/* Valor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Valor (R$)</label>
            <input
              type="number"
              step="0.01"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="0.00"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias[tipo].map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Data */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            />
          </div>

          {/* Botões */}
          <div className="flex gap-2 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] transition-all"
            >
              {transacao ? "Salvar" : "Adicionar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Modal de Meta - RESPONSIVO
const ModalMeta = ({ 
  isOpen, 
  onClose, 
  onSave 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSave: (meta: Omit<Meta, "id" | "atual">) => void;
}) => {
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [prazo, setPrazo] = useState("");

  const categoriasMeta = ["Viagem", "Compra", "Investimento", "Emergência", "Educação", "Imóvel", "Veículo", "Outros"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !valor || !categoria) return;
    
    onSave({
      titulo,
      valor: parseFloat(valor),
      categoria,
      prazo: prazo || undefined
    });
    
    // Reset form
    setTitulo("");
    setValor("");
    setCategoria("");
    setPrazo("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-6 animate-in zoom-in-95">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1d3557]">Nova Meta Financeira</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Título */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Título da Meta</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Viagem para Europa, Carro novo..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            />
          </div>

          {/* Valor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Valor Alvo (R$)</label>
            <input
              type="number"
              step="0.01"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="15000.00"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categoriasMeta.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Prazo (opcional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Prazo (opcional)</label>
            <input
              type="date"
              value={prazo}
              onChange={(e) => setPrazo(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-2 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] transition-all"
            >
              Criar Meta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function AreaRestritaPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<any>(null);
  const [planoEscolhido, setPlanoEscolhido] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [abaAtiva, setAbaAtiva] = useState("dashboard");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [metas, setMetas] = useState<Meta[]>([]);
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [editandoMeta, setEditandoMeta] = useState<number | null>(null);
  const [valorEditando, setValorEditando] = useState("");
  const [modalTransacaoAberto, setModalTransacaoAberto] = useState(false);
  const [modalMetaAberto, setModalMetaAberto] = useState(false);
  const [transacaoEditando, setTransacaoEditando] = useState<Transacao | undefined>(undefined);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todas");
  const [busca, setBusca] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificar se usuário está logado
    const usuarioAtual = localStorage.getItem("usuarioAtual");
    if (!usuarioAtual) {
      router.push("/cadastro");
      return;
    }

    const usuario = JSON.parse(usuarioAtual);
    setUsuario(usuario);

    // SIMULAÇÃO: Definir plano automaticamente se não existir
    let plano = localStorage.getItem("planoEscolhido");
    if (!plano) {
      // Simular que o usuário tem o plano Premium (anual)
      plano = "anual";
      localStorage.setItem("planoEscolhido", plano);
    }

    setPlanoEscolhido(plano);
    
    // Carregar dados salvos
    const metasSalvas = localStorage.getItem("metas");
    if (metasSalvas) setMetas(JSON.parse(metasSalvas));
    
    const transacoesSalvas = localStorage.getItem("transacoes");
    if (transacoesSalvas) setTransacoes(JSON.parse(transacoesSalvas));
    
    const chatSalvo = localStorage.getItem("chatMessages");
    if (chatSalvo) setChatMessages(JSON.parse(chatSalvo));
    
    setLoading(false);
  }, [router]);

  useEffect(() => {
    // Auto-scroll no chat
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("usuarioAtual");
    localStorage.removeItem("planoEscolhido");
    router.push("/");
  };

  const getNomePlano = (tipo: string) => {
    switch (tipo) {
      case "mensal": return "Plano Básico";
      case "anual": return "Plano Premium";
      case "vitalicio": return "Plano Elite";
      default: return "Plano";
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;
    
    const userMessage = chatInput.trim();
    const newMessages = [...chatMessages, { role: "user" as const, content: userMessage }];
    setChatMessages(newMessages);
    setChatInput("");
    setChatLoading(true);
    
    // Simular resposta de IA especialista em finanças (nível Harvard)
    setTimeout(() => {
      const resposta = gerarRespostaFinanceiraEspecializada(userMessage);
      const updatedMessages = [...newMessages, { role: "assistant" as const, content: resposta }];
      setChatMessages(updatedMessages);
      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
      setChatLoading(false);
    }, 1500);
  };

  const gerarRespostaFinanceiraEspecializada = (pergunta: string): string => {
    const perguntaLower = pergunta.toLowerCase();
    
    // Investimentos
    if (perguntaLower.includes("investir") || perguntaLower.includes("investimento")) {
      return "Como especialista em finanças, recomendo uma abordagem diversificada baseada no seu perfil de risco. Para iniciantes, sugiro começar com:\n\n1. **Fundo de Emergência**: 6-12 meses de despesas em liquidez imediata (Tesouro Selic ou CDB com liquidez diária)\n\n2. **Renda Fixa**: 40-60% do portfólio em Tesouro Direto, CDBs de bancos sólidos e LCIs/LCAs para isenção fiscal\n\n3. **Renda Variável**: 20-40% em ETFs diversificados (BOVA11, IVVB11) e ações de empresas consolidadas\n\n4. **Fundos Imobiliários**: 10-20% para diversificação e renda passiva\n\nLembre-se: o tempo no mercado supera timing do mercado. Invista regularmente (dollar-cost averaging) e mantenha disciplina.";
    }
    
    // Dívidas
    if (perguntaLower.includes("dívida") || perguntaLower.includes("divida") || perguntaLower.includes("empréstimo")) {
      return "Estratégia comprovada para eliminação de dívidas:\n\n**Método Avalanche (mais eficiente matematicamente):**\n1. Liste todas as dívidas por taxa de juros (maior para menor)\n2. Pague o mínimo em todas, exceto a de maior juros\n3. Direcione todo recurso extra para a dívida mais cara\n4. Após eliminar a primeira, ataque a próxima\n\n**Táticas complementares:**\n- Negocie taxas menores com credores (sucesso em 70% dos casos)\n- Considere portabilidade de dívidas para taxas menores\n- Evite novas dívidas durante o processo\n- Crie um fundo de emergência paralelo (mínimo R$ 1.000)\n\nJuros compostos trabalham contra você nas dívidas. Cada mês de atraso aumenta exponencialmente o problema. Aja agora!";
    }
    
    // Orçamento
    if (perguntaLower.includes("orçamento") || perguntaLower.includes("orcamento") || perguntaLower.includes("economizar")) {
      return "Framework de Orçamento Inteligente (testado com milhares de clientes):\n\n**Regra 50/30/20 Otimizada:**\n- 50% Necessidades (moradia, alimentação, transporte, saúde)\n- 30% Desejos (lazer, hobbies, entretenimento)\n- 20% Futuro (investimentos, aposentadoria, metas)\n\n**Técnicas avançadas:**\n1. **Auditoria de 30 dias**: Registre TUDO que gastar por 1 mês\n2. **Corte os \"lattes\"**: Pequenos gastos diários somam R$ 3.000-5.000/ano\n3. **Automatize**: Configure transferências automáticas para investimentos no dia do salário\n4. **Negocie fixos**: Renegocie planos (celular, internet, seguros) anualmente - economia média de 30%\n\n**Regra de ouro**: Pague-se primeiro! Invista antes de gastar, não com o que sobra.";
    }
    
    // Aposentadoria
    if (perguntaLower.includes("aposentadoria") || perguntaLower.includes("aposentar") || perguntaLower.includes("previdência")) {
      return "Planejamento de Aposentadoria - Abordagem Científica:\n\n**Cálculo da Independência Financeira:**\nRegra dos 4%: Você precisa de 25x suas despesas anuais investidas.\nExemplo: R$ 5.000/mês = R$ 60.000/ano × 25 = R$ 1.500.000\n\n**Estratégia por faixa etária:**\n\n**20-35 anos**: Agressivo\n- 70% ações/FIIs, 30% renda fixa\n- Aproveite juros compostos (30+ anos de crescimento)\n- Cada R$ 100 investidos hoje = R$ 1.000+ na aposentadoria\n\n**35-50 anos**: Balanceado\n- 50% ações/FIIs, 50% renda fixa\n- Maximize aportes (pico de carreira)\n- Diversifique internacionalmente\n\n**50+ anos**: Conservador\n- 30% ações/FIIs, 70% renda fixa\n- Proteja o capital acumulado\n- Planeje transição gradual\n\n**Dica crucial**: Previdência privada (PGBL/VGBL) só vale se empresa contribuir ou se você declara completo no IR.";
    }
    
    // Emergência
    if (perguntaLower.includes("emergência") || perguntaLower.includes("emergencia") || perguntaLower.includes("reserva")) {
      return "Fundo de Emergência - Seu Colchão Financeiro:\n\n**Tamanho ideal:**\n- CLT estável: 6 meses de despesas\n- Autônomo/PJ: 12 meses de despesas\n- Renda variável: 18 meses de despesas\n\n**Onde investir (ordem de prioridade):**\n1. **Tesouro Selic**: Liquidez D+0, segurança máxima, rentabilidade = 100% CDI\n2. **CDB Liquidez Diária**: Bancos grandes, acima de 100% CDI, garantia FGC\n3. **Conta remunerada**: Nubank, Inter, C6 (para parte de acesso imediato)\n\n**Construção acelerada:**\n- Mês 1-3: R$ 1.000 (emergências pequenas)\n- Mês 4-12: 3 meses de despesas (segurança básica)\n- Mês 13-24: 6-12 meses completos (proteção total)\n\n**NUNCA use para:**\n- Compras planejadas\n- Oportunidades de investimento\n- Férias ou lazer\n\nEmergência é APENAS para: perda de emprego, saúde, reparos urgentes essenciais.";
    }
    
    // Cartão de crédito
    if (perguntaLower.includes("cartão") || perguntaLower.includes("cartao") || perguntaLower.includes("crédito")) {
      return "Cartão de Crédito - Ferramenta ou Armadilha?\n\n**Uso inteligente (como os ricos usam):**\n✅ Pague SEMPRE o valor total da fatura\n✅ Use para cashback/milhas (retorno de 1-3%)\n✅ Aproveite período de até 40 dias sem juros\n✅ Concentre gastos em 1-2 cartões (maximize benefícios)\n✅ Configure alertas de gastos\n\n**NUNCA faça:**\n❌ Pagar mínimo (juros de 10-15% ao mês = 214-435% ao ano!)\n❌ Parcelar sem juros em muitas lojas (compromete orçamento futuro)\n❌ Usar limite como extensão de renda\n❌ Ter mais de 3 cartões ativos\n\n**Rotativo vs Empréstimo:**\nSe não conseguir pagar integral:\n1. Negocie parcelamento da fatura (juros menores)\n2. Considere empréstimo pessoal (juros 3-5% vs 10-15% do rotativo)\n3. Empréstimo consignado se disponível (juros 1-2%)\n\n**Regra de ouro**: Se não tem dinheiro para pagar à vista, não tem dinheiro para comprar no crédito.";
    }
    
    // Imóvel
    if (perguntaLower.includes("imóvel") || perguntaLower.includes("imovel") || perguntaLower.includes("casa") || perguntaLower.includes("apartamento")) {
      return "Comprar ou Alugar? Análise Financeira Profunda:\n\n**Quando COMPRAR faz sentido:**\n- Planeja ficar 7+ anos no mesmo local\n- Entrada de 30-40% disponível\n- Parcela ≤ 25% da renda líquida\n- Taxa de juros ≤ 10% ao ano\n- Imóvel em localização valorizada\n\n**Quando ALUGAR é melhor:**\n- Mobilidade profissional/pessoal\n- Entrada insuficiente (< 20%)\n- Pode investir a diferença com retorno > custo do aluguel\n- Mercado imobiliário supervalorizado\n\n**Cálculo do ponto de equilíbrio:**\nAluguel mensal × 200 = Preço máximo justo do imóvel\nExemplo: Aluguel R$ 2.000 → Comprar só vale até R$ 400.000\n\n**Custos ocultos da compra:**\n- ITBI (2-3% do valor)\n- Registro (1-2%)\n- IPTU, condomínio, manutenção\n- Custo de oportunidade (dinheiro parado no imóvel)\n\n**Estratégia híbrida:**\nAlugue onde mora, invista em imóveis para renda (FIIs ou imóveis para locação em áreas de alta demanda).";
    }
    
    // Renda extra
    if (perguntaLower.includes("renda extra") || perguntaLower.includes("ganhar mais") || perguntaLower.includes("aumentar renda")) {
      return "Estratégias para Aumentar Renda - Abordagem Estruturada:\n\n**Curto prazo (1-3 meses):**\n1. **Freelancing**: Upwork, 99Freelas, Workana (habilidades atuais)\n2. **Venda de itens não usados**: Enjoei, OLX, Marketplace\n3. **Economia compartilhada**: Uber, iFood, Airbnb\n4. **Serviços locais**: Aulas particulares, consultoria, reparos\n\n**Médio prazo (3-12 meses):**\n1. **Qualificação profissional**: Cursos que aumentem salário 20-50%\n2. **Mudança de emprego**: Mercado paga 30% mais em média para quem troca\n3. **Promoção interna**: Assuma mais responsabilidades, documente resultados\n4. **Negócio digital**: Infoprodutos, afiliados, e-commerce\n\n**Longo prazo (1-3 anos):**\n1. **Renda passiva**: Dividendos, aluguéis, royalties\n2. **Negócio próprio**: Valide ideia, comece pequeno, escale\n3. **Investimentos**: Construa portfólio que gere 5-10% ao ano\n\n**Prioridade #1**: Aumente renda ativa primeiro (mais rápido), depois construa renda passiva (mais sustentável).\n\n**Meta realista**: Aumentar renda em 50% em 2 anos é totalmente viável com estratégia correta.";
    }
    
    // Resposta genérica profissional
    return "Como seu consultor financeiro especializado, vou te ajudar com uma análise profunda.\n\nPara dar a melhor orientação, preciso entender melhor sua situação. Poderia me contar mais sobre:\n\n1. **Contexto**: Qual sua situação financeira atual?\n2. **Objetivo**: O que você busca alcançar?\n3. **Prazo**: Quando precisa desse resultado?\n4. **Recursos**: Quanto pode destinar mensalmente?\n\nEnquanto isso, aqui estão princípios fundamentais que aplico com todos os clientes:\n\n✅ **Pague-se primeiro**: 20% da renda para investimentos antes de qualquer gasto\n✅ **Automatize**: Configure transferências automáticas para não depender de disciplina\n✅ **Diversifique**: Nunca coloque todos os ovos na mesma cesta\n✅ **Eduque-se**: Conhecimento financeiro tem ROI infinito\n✅ **Pense longo prazo**: Riqueza é maratona, não sprint\n\nEstou aqui para transformar sua vida financeira. Pode perguntar sobre investimentos, dívidas, orçamento, aposentadoria, imóveis, ou qualquer tema financeiro!";
  };

  const adicionarTransacao = (transacao: Omit<Transacao, "id">) => {
    const novaTransacao = {
      ...transacao,
      id: Date.now()
    };
    const novasTransacoes = [...transacoes, novaTransacao];
    setTransacoes(novasTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(novasTransacoes));
    setModalTransacaoAberto(false);
    showToast("Transação adicionada com sucesso!", "success");
  };

  const editarTransacao = (transacao: Transacao) => {
    setTransacaoEditando(transacao);
    setModalTransacaoAberto(true);
  };

  const salvarEdicaoTransacao = (transacaoEditada: Omit<Transacao, "id">) => {
    if (!transacaoEditando) return;
    
    const novasTransacoes = transacoes.map(t => 
      t.id === transacaoEditando.id ? { ...transacaoEditada, id: t.id } : t
    );
    setTransacoes(novasTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(novasTransacoes));
    setModalTransacaoAberto(false);
    setTransacaoEditando(undefined);
    showToast("Transação atualizada com sucesso!", "success");
  };

  const removerTransacao = (id: number) => {
    const novasTransacoes = transacoes.filter(t => t.id !== id);
    setTransacoes(novasTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(novasTransacoes));
    showToast("Transação removida!", "info");
  };

  const adicionarMeta = (meta: Omit<Meta, "id" | "atual">) => {
    const novaMeta = {
      ...meta,
      id: Date.now(),
      atual: 0
    };
    const novasMetas = [...metas, novaMeta];
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
    setModalMetaAberto(false);
    showToast("Meta criada com sucesso!", "success");
  };

  const removerMeta = (id: number) => {
    const novasMetas = metas.filter(m => m.id !== id);
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
    showToast("Meta removida!", "info");
  };

  const atualizarProgressoMeta = (id: number, novoValor: number) => {
    const novasMetas = metas.map(m => 
      m.id === id ? { ...m, atual: novoValor } : m
    );
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
    setEditandoMeta(null);
    setValorEditando("");
    showToast("Progresso atualizado!", "success");
  };

  const calcularResumo = () => {
    const receitas = transacoes.filter(t => t.tipo === "receita").reduce((acc, t) => acc + t.valor, 0);
    const despesas = transacoes.filter(t => t.tipo === "despesa").reduce((acc, t) => acc + t.valor, 0);
    return { receitas, despesas, saldo: receitas - despesas };
  };

  const exportarPlanilha = () => {
    const resumo = calcularResumo();
    let csv = "Tipo,Descrição,Categoria,Valor,Data\n";
    
    transacoes.forEach(t => {
      csv += `${t.tipo},${t.descricao},${t.categoria},${t.valor},${t.data}\n`;
    });
    
    csv += `\nResumo Financeiro\n`;
    csv += `Total Receitas,${resumo.receitas}\n`;
    csv += `Total Despesas,${resumo.despesas}\n`;
    csv += `Saldo,${resumo.saldo}\n`;
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `planilha_financeira_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Planilha exportada com sucesso!", "success");
  };

  const baixarEbook = () => {
    // Criar conteúdo do e-book em PDF simulado (texto formatado)
    const ebookContent = `
═══════════════════════════════════════════════════════════
    50 DICAS PARA TRANSFORMAR SUAS FINANÇAS
    MyMoneyIA - Consultoria Financeira Inteligente
═══════════════════════════════════════════════════════════

ÍNDICE
------
1. Fundamentos Financeiros
2. Orçamento e Controle
3. Investimentos Inteligentes
4. Eliminação de Dívidas
5. Planejamento de Aposentadoria

═══════════════════════════════════════════════════════════
CAPÍTULO 1: FUNDAMENTOS FINANCEIROS
═══════════════════════════════════════════════════════════

1. PAGUE-SE PRIMEIRO
   Antes de pagar qualquer conta, separe 20% da sua renda para
   investimentos. Trate isso como uma conta obrigatória.

2. REGRA 50/30/20
   - 50% para necessidades (moradia, alimentação, transporte)
   - 30% para desejos (lazer, hobbies)
   - 20% para o futuro (investimentos, aposentadoria)

3. FUNDO DE EMERGÊNCIA
   Mantenha 6-12 meses de despesas em aplicações de liquidez
   imediata. Isso é sua rede de segurança financeira.

4. EVITE DÍVIDAS DE CONSUMO
   Cartão de crédito e empréstimos para consumo têm juros
   altíssimos. Use apenas para emergências reais.

5. EDUQUE-SE FINANCEIRAMENTE
   Invista em conhecimento. Cada livro, curso ou conteúdo sobre
   finanças tem retorno infinito sobre o investimento.

═══════════════════════════════════════════════════════════
CAPÍTULO 2: ORÇAMENTO E CONTROLE
═══════════════════════════════════════════════════════════

6. REGISTRE TUDO
   Anote cada gasto por 30 dias. Você vai se surpreender com
   onde seu dinheiro realmente vai.

7. AUTOMATIZE SUAS FINANÇAS
   Configure transferências automáticas para investimentos e
   pagamento de contas. Elimine a necessidade de disciplina.

8. CORTE OS "LATTES"
   Pequenos gastos diários (café, lanches, apps) somam
   R$ 3.000-5.000 por ano. Identifique e elimine.

9. NEGOCIE TUDO
   Renegocie planos de celular, internet, seguros anualmente.
   Economia média: 30% nos custos fixos.

10. USE DINHEIRO FÍSICO
    Para gastos variáveis, use dinheiro em espécie. Você gasta
    menos quando vê o dinheiro saindo da carteira.

═══════════════════════════════════════════════════════════
CAPÍTULO 3: INVESTIMENTOS INTELIGENTES
═══════════════════════════════════════════════════════════

11. COMECE HOJE
    O melhor momento para investir foi há 10 anos. O segundo
    melhor momento é agora. Não espere ter "dinheiro sobrando".

12. DIVERSIFIQUE
    Nunca coloque todos os ovos na mesma cesta. Distribua entre
    renda fixa, ações, fundos imobiliários e outros ativos.

13. INVISTA REGULARMENTE
    Dollar-cost averaging: invista todo mês, independente do
    mercado estar alto ou baixo. O tempo no mercado vence timing.

14. ENTENDA O QUE COMPRA
    Nunca invista em algo que você não entende. Estude antes
    de aplicar seu dinheiro.

15. PENSE LONGO PRAZO
    Riqueza é construída em décadas, não em dias. Tenha
    paciência e disciplina.

═══════════════════════════════════════════════════════════
CAPÍTULO 4: ELIMINAÇÃO DE DÍVIDAS
═══════════════════════════════════════════════════════════

16. MÉTODO AVALANCHE
    Liste dívidas por taxa de juros. Pague o mínimo em todas,
    exceto a de maior juros. Ataque essa com tudo que puder.

17. NEGOCIE COM CREDORES
    70% dos credores aceitam negociar. Ligue, explique sua
    situação e peça redução de juros ou prazo maior.

18. EVITE NOVAS DÍVIDAS
    Enquanto paga dívidas antigas, não crie novas. Corte
    cartões de crédito se necessário.

19. CELEBRE PEQUENAS VITÓRIAS
    Cada dívida eliminada é uma conquista. Comemore (sem
    gastar muito) para manter a motivação.

20. CONSTRUA RESERVA PARALELA
    Mesmo pagando dívidas, guarde R$ 50-100/mês para
    emergências. Evita criar novas dívidas.

═══════════════════════════════════════════════════════════
CAPÍTULO 5: PLANEJAMENTO DE APOSENTADORIA
═══════════════════════════════════════════════════════════

21. REGRA DOS 4%
    Você precisa de 25x suas despesas anuais investidas para
    se aposentar. Ex: R$ 5.000/mês = R$ 1.500.000 investidos.

22. COMECE CEDO
    Cada R$ 100 investidos aos 25 anos = R$ 1.000+ aos 65.
    Cada R$ 100 investidos aos 45 anos = R$ 200 aos 65.

23. MAXIMIZE CONTRIBUIÇÕES
    Se sua empresa oferece previdência com contrapartida,
    contribua o máximo possível. É dinheiro grátis.

24. DIVERSIFIQUE POR IDADE
    - 20-35 anos: 70% ações, 30% renda fixa
    - 35-50 anos: 50% ações, 50% renda fixa
    - 50+ anos: 30% ações, 70% renda fixa

25. PLANEJE TRANSIÇÃO
    Não pare de trabalhar de uma hora para outra. Reduza
    gradualmente a carga horária nos últimos 5 anos.

═══════════════════════════════════════════════════════════
DICAS BÔNUS (26-50)
═══════════════════════════════════════════════════════════

26. Revise seu orçamento mensalmente
27. Tenha metas financeiras claras e escritas
28. Evite comparações com outros (redes sociais mentem)
29. Invista em você (cursos, saúde, networking)
30. Tenha um mentor financeiro ou coach
31. Leia pelo menos 1 livro de finanças por trimestre
32. Acompanhe seus investimentos, mas não obsessivamente
33. Proteja-se com seguros adequados (vida, saúde)
34. Faça testamento e planejamento sucessório
35. Ensine finanças para seus filhos desde cedo
36. Evite lifestyle inflation (aumento de padrão com aumento de renda)
37. Compre experiências, não coisas
38. Negocie sempre que possível (descontos à vista)
39. Use cashback e programas de pontos estrategicamente
40. Revise assinaturas e cancele as não usadas
41. Cozinhe mais em casa (economia de 50-70%)
42. Compre usado quando fizer sentido (carros, móveis)
43. Invista em qualidade para itens de uso diário
44. Tenha hobbies que não custam caro
45. Pratique gratidão pelo que já tem
46. Evite decisões financeiras emocionais
47. Tenha um dia de "detox financeiro" por semana
48. Revise e otimize impostos anualmente
49. Mantenha documentos financeiros organizados
50. Celebre seu progresso financeiro regularmente

═══════════════════════════════════════════════════════════
CONCLUSÃO
═══════════════════════════════════════════════════════════

Transformar suas finanças não é sobre ganhar mais dinheiro
(embora ajude), mas sobre gerenciar melhor o que você tem.

Pequenas mudanças consistentes ao longo do tempo criam
resultados extraordinários. Comece hoje com uma dica,
amanhã com outra, e em um ano você não vai reconhecer
sua situação financeira.

Lembre-se: você não precisa ser perfeito, precisa ser
consistente. Progresso, não perfeição.

Sucesso na sua jornada financeira!

═══════════════════════════════════════════════════════════
MyMoneyIA - Seu parceiro em educação financeira
www.mymoneyia.com | contato@mymoneyia.com
═══════════════════════════════════════════════════════════
`;

    // Criar e baixar arquivo PDF simulado (TXT formatado)
    const blob = new Blob([ebookContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "50_Dicas_Financeiras_MyMoneyIA.pdf.txt");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("E-book baixado com sucesso!", "success");
  };

  const transacoesFiltradas = transacoes.filter(t => {
    const matchCategoria = filtroCategoria === "todas" || t.categoria === filtroCategoria;
    const matchBusca = t.descricao.toLowerCase().includes(busca.toLowerCase()) || 
                       t.categoria.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  const categorias = Array.from(new Set(transacoes.map(t => t.categoria)));

  const resumo = calcularResumo();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1d3557] via-[#27ae60] to-[#1d3557] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Carregando sua área...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Modais */}
      <ModalTransacao 
        isOpen={modalTransacaoAberto}
        onClose={() => {
          setModalTransacaoAberto(false);
          setTransacaoEditando(undefined);
        }}
        onSave={transacaoEditando ? salvarEdicaoTransacao : adicionarTransacao}
        transacao={transacaoEditando}
      />

      <ModalMeta 
        isOpen={modalMetaAberto}
        onClose={() => setModalMetaAberto(false)}
        onSave={adicionarMeta}
      />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-[#27ae60]" />
              <span className="text-2xl font-bold text-[#1d3557]">MyMoneyIA</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#27ae60]/10 rounded-full">
                <Award className="w-5 h-5 text-[#27ae60]" />
                <span className="text-sm font-semibold text-[#27ae60]">
                  {getNomePlano(planoEscolhido)}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>

          {/* Navegação por Abas */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-t border-gray-100 pt-2 scrollbar-hide">
            <button
              onClick={() => setAbaAtiva("dashboard")}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                abaAtiva === "dashboard" 
                  ? "bg-[#27ae60] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setAbaAtiva("planilha")}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                abaAtiva === "planilha" 
                  ? "bg-[#27ae60] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              📈 Planilha
            </button>
            {(planoEscolhido === "anual" || planoEscolhido === "vitalicio") && (
              <button
                onClick={() => setAbaAtiva("ebook")}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                  abaAtiva === "ebook" 
                    ? "bg-[#27ae60] text-white shadow-lg" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                📚 E-book
              </button>
            )}
            <button
              onClick={() => setAbaAtiva("chat")}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                abaAtiva === "chat" 
                  ? "bg-[#27ae60] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              💬 Chat IA
            </button>
            <button
              onClick={() => setAbaAtiva("metas")}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                abaAtiva === "metas" 
                  ? "bg-[#27ae60] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              🎯 Metas
            </button>
            {planoEscolhido === "vitalicio" && (
              <button
                onClick={() => setAbaAtiva("consultoria")}
                className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                  abaAtiva === "consultoria" 
                    ? "bg-[#27ae60] text-white shadow-lg" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                ✨ Consultoria VIP
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ABA: Dashboard */}
        {abaAtiva === "dashboard" && (
          <>
            {/* Boas-vindas */}
            <div className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-3xl shadow-xl p-8 sm:p-12 text-white mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Bem-vindo, {usuario?.nome?.split(' ')[0]}! 🎉
                  </h1>
                  <p className="text-white/90 text-lg">
                    Você está no {getNomePlano(planoEscolhido)}. Vamos transformar suas finanças!
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="text-white/80 text-sm mb-1">Transações registradas</p>
                  <p className="text-4xl font-bold">{transacoes.length}</p>
                  <p className="text-white/80 text-xs mt-1">Continue assim!</p>
                </div>
              </div>
            </div>

            {/* Resumo Financeiro */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowUpRight className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Receitas</span>
                </div>
                <p className="text-3xl font-bold text-green-600">R$ {resumo.receitas.toFixed(2)}</p>
                <p className="text-xs text-gray-500 mt-1">Total registrado</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowDownRight className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-gray-600">Despesas</span>
                </div>
                <p className="text-3xl font-bold text-red-600">R$ {resumo.despesas.toFixed(2)}</p>
                <p className="text-xs text-gray-500 mt-1">Total registrado</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Saldo</span>
                </div>
                <p className={`text-3xl font-bold ${resumo.saldo >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                  R$ {resumo.saldo.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Disponível</p>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <button
                onClick={() => setAbaAtiva("planilha")}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all text-left"
              >
                <Download className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-800">Planilha</h3>
                <p className="text-xs text-gray-600 mt-1">Gerencie finanças</p>
              </button>

              {(planoEscolhido === "anual" || planoEscolhido === "vitalicio") && (
                <button
                  onClick={() => setAbaAtiva("ebook")}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all text-left"
                >
                  <BookOpen className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-800">E-book</h3>
                  <p className="text-xs text-gray-600 mt-1">50 dicas grátis</p>
                </button>
              )}

              <button
                onClick={() => setAbaAtiva("chat")}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all text-left"
              >
                <MessageCircle className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-800">Chat IA</h3>
                <p className="text-xs text-gray-600 mt-1">Consultor expert</p>
              </button>

              <button
                onClick={() => setAbaAtiva("metas")}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all text-left"
              >
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-800">Metas</h3>
                <p className="text-xs text-gray-600 mt-1">Defina objetivos</p>
              </button>
            </div>

            {/* Últimas Transações */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#1d3557] mb-4">Últimas Transações</h2>
              {transacoes.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Nenhuma transação registrada ainda</p>
                  <button
                    onClick={() => setModalTransacaoAberto(true)}
                    className="px-6 py-3 bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] hover:scale-105 transition-all"
                  >
                    Adicionar primeira transação
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {transacoes.slice(-5).reverse().map(t => (
                    <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                      <div className="flex items-center gap-3">
                        {t.tipo === "receita" ? (
                          <ArrowUpRight className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-5 h-5 text-red-600" />
                        )}
                        <div>
                          <p className="font-semibold text-gray-800">{t.descricao}</p>
                          <p className="text-xs text-gray-500">{t.categoria} • {t.data}</p>
                        </div>
                      </div>
                      <p className={`font-bold ${t.tipo === "receita" ? "text-green-600" : "text-red-600"}`}>
                        {t.tipo === "receita" ? "+" : "-"}R$ {t.valor.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* ABA: Planilha */}
        {abaAtiva === "planilha" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-[#1d3557]">Gerenciador Financeiro</h2>
                <div className="flex gap-2">
                  <button
                    onClick={exportarPlanilha}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Exportar CSV
                  </button>
                  <button
                    onClick={() => setModalTransacaoAberto(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] hover:scale-105 transition-all"
                  >
                    <Plus className="w-5 h-5" />
                    Nova Transação
                  </button>
                </div>
              </div>

              {/* Resumo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Total Receitas</p>
                  <p className="text-2xl font-bold text-green-600">R$ {resumo.receitas.toFixed(2)}</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Total Despesas</p>
                  <p className="text-2xl font-bold text-red-600">R$ {resumo.despesas.toFixed(2)}</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Saldo</p>
                  <p className={`text-2xl font-bold ${resumo.saldo >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                    R$ {resumo.saldo.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Filtros e Busca */}
              {transacoes.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                      placeholder="Buscar transações..."
                      className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
                    />
                  </div>
                  <select
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
                  >
                    <option value="todas">Todas as categorias</option>
                    {categorias.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Lista de Transações */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-800 mb-3">
                  {busca || filtroCategoria !== "todas" 
                    ? `Transações Filtradas (${transacoesFiltradas.length})`
                    : `Todas as Transações (${transacoes.length})`
                  }
                </h3>
                {transacoes.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Comece a registrar suas transações</p>
                    <button
                      onClick={() => setModalTransacaoAberto(true)}
                      className="px-6 py-3 bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] hover:scale-105 transition-all"
                    >
                      Adicionar primeira transação
                    </button>
                  </div>
                ) : transacoesFiltradas.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-xl">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-600">Nenhuma transação encontrada com esses filtros</p>
                  </div>
                ) : (
                  transacoesFiltradas.map(t => (
                    <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group">
                      <div className="flex items-center gap-3">
                        {t.tipo === "receita" ? (
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-green-600" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <ArrowDownRight className="w-5 h-5 text-red-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-800">{t.descricao}</p>
                          <p className="text-xs text-gray-500">{t.categoria} • {t.data}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className={`font-bold ${t.tipo === "receita" ? "text-green-600" : "text-red-600"}`}>
                          {t.tipo === "receita" ? "+" : "-"}R$ {t.valor.toFixed(2)}
                        </p>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => editarTransacao(t)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removerTransacao(t.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ABA: E-book */}
        {abaAtiva === "ebook" && (planoEscolhido === "anual" || planoEscolhido === "vitalicio") && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <BookOpen className="w-20 h-20 text-[#27ae60] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
                  E-book: 50 Dicas para Transformar suas Finanças
                </h2>
                <p className="text-gray-600 mb-6">
                  Conteúdo exclusivo para membros Premium e Elite
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] rounded-2xl p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-4">📚 O que você vai aprender:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Como criar um orçamento eficiente e realista que funciona</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Estratégias comprovadas para economizar sem sacrificar qualidade de vida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Investimentos para iniciantes: por onde começar e como diversificar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Como sair das dívidas de forma inteligente e permanente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Planejamento financeiro para aposentadoria e independência financeira</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Técnicas avançadas de negociação e redução de custos fixos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Psicologia do dinheiro: como mudar sua mentalidade financeira</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button 
                  onClick={baixarEbook}
                  className="px-8 py-4 bg-[#27ae60] text-white rounded-xl font-bold text-lg hover:bg-[#229954] hover:scale-105 transition-all shadow-lg"
                >
                  <Download className="w-6 h-6 inline-block mr-2" />
                  Baixar E-book Completo (PDF)
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Arquivo PDF • 50 dicas práticas • Atualizado em 2024 • Acesso vitalício
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ABA: Chat IA */}
        {abaAtiva === "chat" && (
          <div className="bg-white rounded-2xl shadow-lg p-6 h-[600px] flex flex-col">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b">
              <div className="w-12 h-12 bg-gradient-to-br from-[#27ae60] to-[#1d3557] rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1d3557]">Consultor Financeiro IA</h2>
                <p className="text-sm text-gray-600">Especialista formado em Harvard • Disponível 24/7</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {chatMessages.length === 0 ? (
                <div className="text-center py-8">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Olá! Sou seu consultor financeiro pessoal.
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tenho formação equivalente a Harvard em finanças e estou aqui para transformar sua vida financeira.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mt-6">
                    <button
                      onClick={() => {
                        setChatInput("Como devo começar a investir?");
                        setTimeout(() => document.querySelector<HTMLFormElement>('form')?.requestSubmit(), 100);
                      }}
                      className="p-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-800">💰 Como começar a investir?</p>
                    </button>
                    <button
                      onClick={() => {
                        setChatInput("Como sair das dívidas?");
                        setTimeout(() => document.querySelector<HTMLFormElement>('form')?.requestSubmit(), 100);
                      }}
                      className="p-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-800">💳 Como sair das dívidas?</p>
                    </button>
                    <button
                      onClick={() => {
                        setChatInput("Como fazer um orçamento eficiente?");
                        setTimeout(() => document.querySelector<HTMLFormElement>('form')?.requestSubmit(), 100);
                      }}
                      className="p-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-800">📊 Criar orçamento eficiente</p>
                    </button>
                    <button
                      onClick={() => {
                        setChatInput("Como planejar aposentadoria?");
                        setTimeout(() => document.querySelector<HTMLFormElement>('form')?.requestSubmit(), 100);
                      }}
                      className="p-3 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-800">🎯 Planejar aposentadoria</p>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl p-4 ${
                        msg.role === "user" 
                          ? "bg-[#27ae60] text-white" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        <p className="whitespace-pre-line">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {chatLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl p-4">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </>
              )}
            </div>

            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Pergunte sobre investimentos, dívidas, orçamento..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#27ae60] transition-all"
                disabled={chatLoading}
              />
              <button
                type="submit"
                disabled={chatLoading}
                className="px-6 py-3 bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* ABA: Metas */}
        {abaAtiva === "metas" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1d3557]">Minhas Metas Financeiras</h2>
                <button
                  onClick={() => setModalMetaAberto(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] hover:scale-105 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  Nova Meta
                </button>
              </div>

              {metas.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Você ainda não definiu suas metas financeiras</p>
                  <p className="text-sm text-gray-500 mb-6">
                    Defina objetivos claros e acompanhe seu progresso em tempo real
                  </p>
                  <button
                    onClick={() => setModalMetaAberto(true)}
                    className="px-6 py-3 bg-[#27ae60] text-white rounded-xl font-semibold hover:bg-[#229954] hover:scale-105 transition-all"
                  >
                    Criar primeira meta
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {metas.map(meta => {
                    const progresso = (meta.atual / meta.valor) * 100;
                    const faltam = meta.valor - meta.atual;
                    const concluida = progresso >= 100;
                    
                    return (
                      <div key={meta.id} className={`rounded-xl p-6 transition-all ${concluida ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50 hover:shadow-lg'}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-gray-800">{meta.titulo}</h3>
                              {concluida && <CheckCircle className="w-5 h-5 text-green-600" />}
                            </div>
                            <p className="text-sm text-gray-600">{meta.categoria}</p>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Meta: R$ {meta.valor.toFixed(2)}</p>
                            {meta.prazo && (
                              <p className="text-xs text-gray-500 mt-1">
                                Prazo: {new Date(meta.prazo).toLocaleDateString('pt-BR')}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removerMeta(meta.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Progresso</span>
                            <span className={`text-sm font-bold ${concluida ? 'text-green-600' : 'text-[#27ae60]'}`}>
                              {progresso.toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full transition-all ${concluida ? 'bg-green-600' : 'bg-[#27ae60]'}`}
                              style={{ width: `${Math.min(progresso, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        {editandoMeta === meta.id ? (
                          <div className="flex gap-2">
                            <input
                              type="number"
                              value={valorEditando}
                              onChange={(e) => setValorEditando(e.target.value)}
                              placeholder="Valor atual"
                              className="flex-1 px-3 py-2 border-2 border-[#27ae60] rounded-lg focus:outline-none"
                              autoFocus
                            />
                            <button
                              onClick={() => {
                                const novoValor = parseFloat(valorEditando);
                                if (!isNaN(novoValor) && novoValor >= 0) {
                                  atualizarProgressoMeta(meta.id, novoValor);
                                }
                              }}
                              className="p-2 bg-[#27ae60] text-white rounded-lg hover:bg-[#229954]"
                            >
                              <Check className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => {
                                setEditandoMeta(null);
                                setValorEditando("");
                              }}
                              className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">
                                Atual: <span className="font-bold text-gray-800">R$ {meta.atual.toFixed(2)}</span>
                              </p>
                              {!concluida && (
                                <p className="text-xs text-gray-500">
                                  Faltam: R$ {faltam.toFixed(2)}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => {
                                setEditandoMeta(meta.id);
                                setValorEditando(meta.atual.toString());
                              }}
                              className="flex items-center gap-1 px-3 py-2 bg-[#27ae60] text-white rounded-lg hover:bg-[#229954] hover:scale-105 transition-all text-sm"
                            >
                              <Edit className="w-4 h-4" />
                              Atualizar
                            </button>
                          </div>
                        )}
                        
                        {concluida && (
                          <div className="mt-3 p-3 bg-green-100 rounded-lg">
                            <p className="text-sm font-semibold text-green-800 text-center">
                              🎉 Meta concluída! Parabéns!
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ABA: Consultoria VIP */}
        {abaAtiva === "consultoria" && planoEscolhido === "vitalicio" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-[#1d3557] mb-4">
                Consultoria VIP com IA Especializada
              </h2>
              <p className="text-gray-600 mb-8">
                Sessão mensal personalizada com nossa inteligência artificial especialista em finanças pessoais
              </p>

              <div className="bg-purple-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-purple-900 mb-4">O que está incluído:</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-800">Análise profunda da sua situação financeira atual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-800">Plano de ação personalizado para seus objetivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-800">Recomendações de investimentos adequadas ao seu perfil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-800">Estratégias para otimização tributária</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-800">Acompanhamento mensal do seu progresso</span>
                  </li>
                </ul>
              </div>

              <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 hover:scale-105 transition-all shadow-lg">
                <Calendar className="w-6 h-6 inline-block mr-2" />
                Agendar Próxima Sessão
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
