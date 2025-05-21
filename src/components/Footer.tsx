"use client";

import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaPinterestP
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-steel-gray text-text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="h-40 w-48 relative">
              <img 
                src="/images/logo-background.png" 
                alt="TenoTec Logo" 
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
            <p className="text-concrete">
              Transformando sonhos em realidade com manutenções, reformas e construções de alto padrão.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-concrete hover:text-accent transition-colors w-8 h-8 flex items-center justify-center rounded-full border border-concrete hover:border-accent">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-concrete hover:text-accent transition-colors w-8 h-8 flex items-center justify-center rounded-full border border-concrete hover:border-accent">
                <FaFacebookF size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-concrete hover:text-accent transition-colors w-8 h-8 flex items-center justify-center rounded-full border border-concrete hover:border-accent">
                <FaYoutube size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
                 className="text-concrete hover:text-accent transition-colors w-8 h-8 flex items-center justify-center rounded-full border border-concrete hover:border-accent">
                <FaTiktok size={18} />
              </a>
              <a href="https://br.pinterest.com/TenotecServicos/" target="_blank" rel="noopener noreferrer" 
                 className="text-concrete hover:text-accent transition-colors w-8 h-8 flex items-center justify-center rounded-full border border-concrete hover:border-accent">
                <FaPinterestP size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-concrete hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="text-concrete hover:text-accent transition-colors">Projetos</a></li>
              <li><a href="#sobre" className="text-concrete hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-concrete hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#consultoria" className="text-concrete hover:text-accent transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li className="text-concrete">Reformas Completas</li>
              <li className="text-concrete">Manutenções</li>
              <li className="text-concrete">Construções</li>
              <li className="text-concrete">Consultoria</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-concrete">contato@tenotec.com.br</li>
              <li className="text-concrete">(11) 91052-1536</li>
              <li className="text-concrete">Av. Paulista, 1636 Paulista Corporate</li>
              <li className="text-concrete">Cerqueira Cesar, São Paulo - SP, 01310-200</li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-secondary my-8"></div>

        {/* Copyright */}
        <div className="text-center text-concrete">
          <p>&copy; {new Date().getFullYear()} TenoTec. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 35.577.183/0001-97</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;