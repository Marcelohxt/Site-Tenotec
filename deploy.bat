@echo off
REM Script para deploy do site TenoTec no Windows

echo 🚀 Iniciando processo de deploy do site TenoTec...

REM Verificar se estamos no ambiente correto
if not exist "package.json" (
  echo ❌ Erro: package.json não encontrado. Certifique-se de estar na pasta raiz do projeto.
  exit /b 1
)

REM Instalar dependências
echo 📦 Instalando dependências...
call npm install

REM Verificar erros de lint
echo 🔍 Verificando por erros de lint...
call npm run lint
if %ERRORLEVEL% neq 0 (
  echo ❌ Erros de lint encontrados. Corrija-os antes de continuar.
  exit /b 1
)

REM Gerar build de produção
echo 🏗️ Gerando build de produção...
call npm run build
if %ERRORLEVEL% neq 0 (
  echo ❌ Build falhou. Corrija os erros antes de continuar.
  exit /b 1
)

REM Gerar sitemap
echo 🗺️ Gerando sitemap...
call npm run postbuild
if %ERRORLEVEL% neq 0 (
  echo ⚠️ Falha ao gerar sitemap. Verifique as configurações.
)

REM Opções de deploy
echo ✅ Build concluído com sucesso!
echo.
echo Escolha um método de deploy:
echo 1) Deploy com Vercel
echo 2) Deploy com Netlify
echo 3) Deploy com Docker
echo 4) Deploy para Hostgator
echo 5) Iniciar servidor localmente
echo 6) Sair

set /p option="Opção: "

if "%option%"=="1" (
  echo 🔄 Iniciando deploy com Vercel...
  npx vercel --prod
) else if "%option%"=="2" (
  echo 🔄 Iniciando deploy com Netlify...
  npx netlify deploy --prod
) else if "%option%"=="3" (
  echo 🔄 Construindo e iniciando contêiner Docker...
  docker build -t tenotec-website .
  echo ✅ Imagem Docker criada com sucesso!
  echo Para executar a imagem, use: docker run -p 3000:3000 tenotec-website
) else if "%option%"=="4" (
  echo 🔄 Preparando arquivos para Hostgator...
  call npm run deploy-hostgator
) else if "%option%"=="5" (
  echo 🔄 Iniciando servidor localmente...
  npm run start
) else if "%option%"=="6" (
  echo ❌ Deploy cancelado.
  exit /b 0
) else (
  echo ❌ Opção inválida.
  exit /b 1
)

echo ✅ Processo de deploy concluído com sucesso! 