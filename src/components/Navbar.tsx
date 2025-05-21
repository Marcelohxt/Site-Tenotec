"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Fornecedores', href: '#fornecedores' },
    { name: 'Contato', href: '#contato' },
    { name: 'Consultoria', href: '#consultoria' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center text-2xl font-bold text-foreground"
          >
            <span className="text-primary mr-1">Teno</span>
            <span className="text-accent">Tec</span>
            <span className="ml-1 text-sm bg-primary text-text-light px-1 rounded-sm">®</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group text-secondary hover:text-foreground transition-colors"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 ease-out group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mr-12">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-accent"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="mx-4 mt-3 rounded-xl bg-neutral-900 shadow-xl ring-1 ring-neutral-800">
                <nav className="flex flex-col space-y-2 p-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 hover:text-[var(--accent)] transition duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
