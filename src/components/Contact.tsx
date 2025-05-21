"use client";

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Logo Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/images/logo-background.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          Entre em Contato
        </motion.h2>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-black">Informações de Contato</h3>
            
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-black">Telefone</h4>
                <p className="text-text-dark mt-1">(11) 2110-2954</p>
                <a href="https://wa.me/5511910521536?text=Olá!%20Gostaria%20de%20Inovar%20" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-dark hover:text-primary transition-colors">
                  <span>(11) 91052-1536</span>
                  <svg className="h-5 w-5 ml-2 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
               
                <a href="https://wa.me/5511910251048?text=Olá!%20Gostaria%20de%20Inovar%20" target="_blank" rel="noopener noreferrer" className="flex items-center text-text-dark hover:text-primary transition-colors mt-1">
                  <span>(11) 91025-1048</span>
                  <svg className="h-5 w-5 ml-2 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-black">Email</h4>
                <p className="text-text-dark">contato@tenotec.com.br</p>
                <p className="text-text-dark">comercial@tenotec.com.br</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-black">Endereço</h4>
                <p className="text-text-dark">Av. Paulista, 1636 - Sala 1105-2128- Paulista Corporate</p>
                <p className="text-text-dark">Cerqueira Cesar, São Paulo - SP</p>
                <p className="text-text-dark">CEP: 01310-200</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4 text-black">Horário de Atendimento</h4>
              <p className="text-text-dark">Segunda a Sexta: 8h às 18h</p>
              <p className="text-text-dark">Sábado: 9h às 13h</p>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--concrete)] p-6 rounded-2xl shadow-xl text-[var(--text-dark)] transition duration-300 hover:brightness-105"



          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary bg-background-dark text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary bg-background-dark text-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary bg-background-dark text-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-secondary shadow-sm focus:border-primary focus:ring-primary bg-background-dark text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-text-light px-6 py-3 rounded-full hover:bg-accent transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 