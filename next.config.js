/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Necessário para exportação estática
  },
  // Otimizações para produção
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Compressão de recursos estáticos
  compress: true,
  // Configurações de cache
  onDemandEntries: {
    // período (em ms) onde a página servirá o mesmo conteúdo em cache
    maxInactiveAge: 60 * 60 * 1000,
    // número de páginas que devem ser mantidas em memória simultaneamente
    pagesBufferLength: 5,
  },
  poweredByHeader: false,
  // Configuração para o Docker
  output: 'export', // Alterado para 'export' para gerar HTML estático
  // Desabilita links prefetch que podem causar problemas em hospedagem compartilhada
  experimental: {
    scrollRestoration: true,
  },
  trailingSlash: true, // Ajuda com URLs limpos na hospedagem compartilhada
};

module.exports = nextConfig; 