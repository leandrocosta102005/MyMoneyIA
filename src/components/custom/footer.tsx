import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1d3557] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Slogan */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#27ae60] to-white rounded-lg flex items-center justify-center">
                <span className="text-[#1d3557] font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MyMoneyIA</span>
            </div>
            <p className="text-gray-300 text-sm">
              Seu dinheiro sob controle, sem complicação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-300 hover:text-[#27ae60] transition-colors text-sm">
                Início
              </Link>
              <Link href="/produto" className="text-gray-300 hover:text-[#27ae60] transition-colors text-sm">
                Produto
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-[#27ae60] transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <p className="text-gray-300 text-sm mb-2">
              contato@mymoneyia.com.br
            </p>
            <p className="text-gray-300 text-sm">
              Suporte disponível de segunda a sexta, das 9h às 18h.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 MyMoneyIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
