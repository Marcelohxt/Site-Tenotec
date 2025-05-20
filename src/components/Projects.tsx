"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Reforma Completa Apartamento",
    description: "Transformação total de um apartamento de 120m² com design moderno e funcional",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    category: "Reforma Residencial"
  },
  {
    title: "Reforma de Cozinha",
    description: "Transformação completa de cozinha com materiais premium e iluminação moderna",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    category: "Reforma Residencial"
  },
  {
    title: "Reforma de Sala",
    description: "Modernização completa de sala de estar com design contemporâneo",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    category: "Reforma Residencial"
  },
  {
    title: "Reforma de Banheiro",
    description: "Renovação completa de banheiro com acabamento premium",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    category: "Reforma Residencial"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState<'before' | 'after'>('before');

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          Nossos Projetos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-steel-gray/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-text-light w-full bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-3 text-gray-100 line-clamp-2">
                      {project.description}
                    </p>
                    <span className="inline-block bg-primary px-4 py-1.5 rounded-full text-sm font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Projeto */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-xl max-w-4xl w-full overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative h-[500px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={currentImage === 'before' ? projects[selectedProject].beforeImage : projects[selectedProject].afterImage}
                      alt={`${currentImage === 'before' ? 'Antes' : 'Depois'} - ${projects[selectedProject].title}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Botões de Navegação */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                      onClick={() => setCurrentImage('before')}
                      className={`px-4 py-2 rounded-full text-white transition-all duration-300 ${
                        currentImage === 'before' ? 'bg-primary' : 'bg-black/50 hover:bg-black/70'
                      }`}
                    >
                      Antes
                    </button>
                    <button
                      onClick={() => setCurrentImage('after')}
                      className={`px-4 py-2 rounded-full text-white transition-all duration-300 ${
                        currentImage === 'after' ? 'bg-primary' : 'bg-black/50 hover:bg-black/70'
                      }`}
                    >
                      Depois
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{projects[selectedProject].title}</h3>
                  <p className="text-text-dark mb-4">{projects[selectedProject].description}</p>
                  <span className="inline-block bg-primary px-4 py-1.5 rounded-full text-sm font-medium text-white">
                    {projects[selectedProject].category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-text-light px-8 py-3 rounded-full hover:bg-accent transition-colors">
            Ver Todos os Projetos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 