"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Reforma Completa Apartamento",
    description: "Transformação total de um apartamento de 120m²",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    category: "Reforma"
  },
  {
    title: "Casa de Alto Padrão",
    description: "Construção de residência com 350m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Construção"
  },
  {
    title: "Projeto Comercial",
    description: "Reforma de espaço comercial com design moderno",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    category: "Comercial"
  },
  {
    title: "Cozinha Premium",
    description: "Reforma completa de cozinha com materiais nobres",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    category: "Reforma"
  }
];

const Projects = () => {
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
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
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