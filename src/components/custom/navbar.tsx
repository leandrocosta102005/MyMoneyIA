"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#27ae60] to-[#1d3557] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-[#1d3557]">MyMoneyIA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#27ae60] transition-colors">
              Início
            </Link>
            <Link href="/produto" className="text-gray-700 hover:text-[#27ae60] transition-colors">
              Produto
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#27ae60] transition-colors">
              Blog
            </Link>
            <Link 
              href="/produto" 
              className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Conhecer a Planilha
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#27ae60] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/produto" 
                className="text-gray-700 hover:text-[#27ae60] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Produto
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-[#27ae60] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/produto" 
                className="bg-gradient-to-r from-[#27ae60] to-[#1d3557] text-white px-6 py-3 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Conhecer a Planilha
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
