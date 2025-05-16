"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useRouter } from 'next/navigation';

const heroImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
  "https://images.unsplash.com/photo-1744819306949-bd01397a7045?q=80&w=1578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[current]}
              src={heroImages[current]}
              alt="Hero background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover scale-110"
              style={{ objectPosition: 'center' }}
            />
          </AnimatePresence>
          {/* Overlay */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(226, 226, 226, 0.4)'}} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-text-light mb-6"
          >
            Transformando Sonhos em Realidade
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-light mb-8 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            Reformas e Construções de Alto Padrão
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
              {/* Botão que leva para o WhatsApp */}
              <a
                href="https://wa.me/5511910521536?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento de Reformas e Construções de Alto Padrão."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Solicite um Orçamento
              </a>

              {/* Botão que navega para uma seção da página */}
              <a
                href="#projetos"
                className="inline-block backdrop-blur-sm bg-white/10 border border-white/30 text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/60"
              >
                Conheça Nossos Projetos
              </a>''
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reformas Completas",
                description: "Transformação total do seu espaço com materiais premium e acabamento impecável. Nossa equipe especializada cuida de cada detalhe para garantir qualidade, conforto e elegância, elevando seu ambiente a um novo padrão de sofisticação. Conte com a TenoTec para realizar seu projeto dos sonhos com eficiência e transparência."
              },
              {
                title: "Manutenções",
                description: "Oferecemos soluções integradas para todas as necessidades de manutenção predial, garantindo segurança, eficiência e valorização do seu imóvel. Atuamos em serviços elétricos, hidráulicos, estruturais, pintura, limpeza e reparos em fachadas, com equipe especializada e materiais de alta qualidade. Conte com a TenoTec para manter seu patrimônio sempre funcional, seguro e esteticamente impecável."
              },
              {
                title: "Construção de Alto Padrão",
                description: "Projetos exclusivos e personalizados que unem design sofisticado, materiais nobres e tecnologia de ponta para transformar sonhos em realidade. Com a TenoTec, sua construção ganha qualidade superior, acabamento impecável e total atenção aos detalhes, garantindo imóveis que impressionam e valorizam o seu investimento."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background-dark"
              >
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-text-dark">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1470&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2 // Ajuste a opacidade conforme necessário
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Inovação e Excelência na TenoTec
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl text-center font-semibold mb-12 text-primary/80"
            >
              Tecnologia e Sustentabilidade em Cada Projeto
            </motion.h3>
            
            <div className="space-y-8 text-text-dark backdrop-blur-sm bg-background/50 p-8 rounded-2xl shadow-xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-lg leading-relaxed"
              >
                Na Tenotec, somos especialistas em reformas e construções de alto padrão que aliam sofisticação, 
                eficiência e inovação. Mais do que obras, entregamos experiências únicas e espaços que 
                refletem o estilo de vida de cada cliente.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-lg leading-relaxed"
              >
                Atendemos clientes exigentes que sabem exatamente o que querem: qualidade impecável, 
                prazos respeitados e um resultado que impressiona em cada detalhe. Por isso, cada projeto 
                é tratado como exclusivo, com acompanhamento técnico especializado, materiais de alto 
                desempenho e mão de obra altamente qualificada.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-6 my-12"
              >
                {[
                  { icon: "🏗️", text: "Projetos residenciais e comerciais" },
                  { icon: "🌱", text: "Certificação LEED e construção sustentável" },
                  { icon: "🏠", text: "Automação residencial e comercial integrada" },
                  { icon: "📱", text: "Acompanhamento em tempo real via aplicativo" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-4 bg-background/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-lg leading-relaxed"
              >
                Nosso diferencial está na união entre inovação tecnológica e excelência construtiva. 
                Oferecemos visualização 3D em realidade virtual do seu projeto antes da execução, 
                monitoramento inteligente do canteiro de obras e relatórios detalhados em tempo real.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-12"
              >
                O futuro da construção começa aqui.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mt-12"
              >
                <a
                  href="https://wa.me/5511910521536?text=Olá!%20%20Quero%20%20Inovar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-600 to-green-400 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
                >
                  Inove com a TenoTec
                </a>
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultoria Section */}
      <section id="consultoria" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Consultoria Especializada</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-text-dark mb-8">
              Oferecemos consultoria especializada em todas as etapas do seu projeto, desde o planejamento 
              até a entrega final, utilizando as mais avançadas ferramentas de Business Intelligence.
            </p>
          </div>
          
          {/* Business Intelligence */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-10 text-foreground">Business Intelligence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center"
              >
                <h4 className="text-2xl font-semibold mb-4 text-foreground">Tomada de Decisões Baseada em Dados</h4>
                <p className="text-text-dark mb-4">
                  Utilizamos ferramentas avançadas de BI para analisar e otimizar cada aspecto do seu projeto.
                  Nossa abordagem baseada em dados garante que todas as decisões sejam tomadas com precisão,
                  maximizando a eficiência e reduzindo custos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Análise de custo-benefício em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Previsão precisa de prazos e orçamentos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Otimização de recursos e materiais</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative h-80 md:h-auto rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=1470&auto=format&fit=crop" 
                  alt="Business Intelligence Dashboard" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Nossos Parceiros
          <h3 className="text-3xl font-semibold text-center mb-10 text-foreground">Nossos Parceiros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "TechBuild Solutions",
                logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1470&auto=format&fit=crop",
                expertise: "Tecnologia e Automação"
              },
              {
                name: "Eco Construções",
                logo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1472&auto=format&fit=crop",
                expertise: "Soluções Sustentáveis"
              },
              {
                name: "Design Premium",
                logo: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop",
                expertise: "Design de Interiores"
              },
              {
                name: "Global Materials",
                logo: "https://images.unsplash.com/photo-1535161666865-d1f0a6270d09?q=80&w=1470&auto=format&fit=crop",
                expertise: "Materiais Importados"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">{partner.name}</h4>
                <p className="text-text-dark">{partner.expertise}</p>
              </motion.div>
            ))}
          </div> */}
          
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5511910521536?text=Olá!%20Gostaria%20de%20solicitar%20uma%20consultoria e entender mais sobre!."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 text-lg shadow-lg"
            >
              Solicitar Consultoria
            </a>
          </div>

        </div>
      </section>

      {/* Projetos Section */}
      <Projects />

      {/* Contato Section */}
      <Contact />
    </main>
  );
}
