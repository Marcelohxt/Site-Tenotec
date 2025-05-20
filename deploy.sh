#!/bin/bash

# Script para deploy do site TenoTec

echo "🚀 Iniciando processo de deploy do site TenoTec..."

# Verificar se estamos no ambiente correto
if [ ! -f "package.json" ]; then
  echo "❌ Erro: package.json não encontrado. Certifique-se de estar na pasta raiz do projeto."
  exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Verificar erros de lint
echo "🔍 Verificando por erros de lint..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Erros de lint encontrados. Corrija-os antes de continuar."
  exit 1
fi

# Gerar build de produção
echo "🏗️ Gerando build de produção..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build falhou. Corrija os erros antes de continuar."
  exit 1
fi

# Gerar sitemap
echo "🗺️ Gerando sitemap..."
npm run postbuild
if [ $? -ne 0 ]; then
  echo "⚠️ Falha ao gerar sitemap. Verifique as configurações."
fi

# Opções de deploy
echo "✅ Build concluído com sucesso!"
echo ""
echo "Escolha um método de deploy:"
echo "1) Deploy com Vercel"
echo "2) Deploy com Netlify"
echo "3) Deploy com Docker"
echo "4) Iniciar servidor localmente"
echo "5) Sair"

read -p "Opção: " option

case $option in
  1)
    echo "🔄 Iniciando deploy com Vercel..."
    npx vercel --prod
    ;;
  2)
    echo "🔄 Iniciando deploy com Netlify..."
    npx netlify deploy --prod
    ;;
  3)
    echo "🔄 Construindo e iniciando contêiner Docker..."
    docker build -t tenotec-website .
    echo "✅ Imagem Docker criada com sucesso!"
    echo "Para executar a imagem, use: docker run -p 3000:3000 tenotec-website"
    ;;
  4)
    echo "🔄 Iniciando servidor localmente..."
    npm run start
    ;;
  5)
    echo "❌ Deploy cancelado."
    exit 0
    ;;
  *)
    echo "❌ Opção inválida."
    exit 1
    ;;
esac

echo "✅ Processo de deploy concluído com sucesso!" 