# TenoTec - Website Institucional

![TenoTec Logo](https://via.placeholder.com/150x50?text=TenoTec)

## 📋 Sobre o Projeto

O site institucional da TenoTec foi desenvolvido para apresentar a empresa especializada em reformas e construções de alto padrão. O projeto foi criado usando tecnologias modernas como React, Next.js e Tailwind CSS para garantir uma experiência de usuário fluida e responsiva.

### 🎯 Objetivos

- Apresentar a empresa e seus serviços de forma profissional
- Destacar projetos e experiências anteriores
- Fornecer um canal de contato direto com a empresa
- Oferecer informações sobre consultoria especializada
- Estabelecer presença digital com design moderno e responsivo

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React com renderização do lado do servidor
- **React**: Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Framer Motion**: Biblioteca para animações fluidas
- **React Icons**: Biblioteca de ícones para redes sociais e elementos visuais
- **Heroicons**: Conjunto de ícones SVG para elementos de UI

## 🏗️ Estrutura do Projeto

```
tenotech-website/
├── public/               # Arquivos estáticos
├── src/                  # Código fonte
│   ├── app/              # Arquivos da aplicação Next.js
│   │   ├── globals.css   # Estilos globais (inclui paleta de cores)
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página inicial
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Contact.tsx   # Seção de contato
│   │   ├── Footer.tsx    # Rodapé com informações e links sociais
│   │   ├── Navbar.tsx    # Barra de navegação
│   │   ├── Projects.tsx  # Seção de projetos
│   │   └── WhatsappButton.tsx # Botão flutuante do WhatsApp
├── tailwind.config.ts    # Configuração do Tailwind CSS
├── package.json          # Dependências e scripts
└── README.md             # Documentação (este arquivo)
```

## 🎨 Paleta de Cores

A paleta de cores personalizada foi criada para refletir o ambiente de construção civil e engenharia, com cores que remetem a materiais de construção, segurança e profissionalismo:

- **Fundo**: `--background: #f2f2f2` (cinza claro como cimento)
- **Texto**: `--foreground: #1f1f1f` (quase preto)
- **Primária**: `--primary: #d9822b` (laranja queimado - referência a EPI)
- **Secundária**: `--secondary: #6c757d` (cinza sóbrio)
- **Destaque**: `--accent: #ffc107` (amarelo sinalização)
- **Fundo alternativo**: `--background-dark: #e0e0e0` (tom cimento médio)
- **Cinza metálico**: `--steel-gray: #4a4a4a` (tom metálico)
- **Concreto**: `--concrete: #999999` (referência visual ao concreto)

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js 14.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/tenotech-website.git
cd tenotech-website
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Construção para Produção

```bash
npm run build
# ou
yarn build
```

## 🚀 Deploy

O projeto está configurado para ser facilmente implantado em vários ambientes. Escolha uma das opções abaixo:

### Deploy Automatizado (Recomendado)

Use o script de deploy automatizado que guiará você pelo processo:

**No Windows:**
```bash
deploy.bat
```

**No Linux/Mac:**
```bash
./deploy.sh
```

### Deploy Manual

#### Vercel (Recomendado para Next.js)

1. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

2. Faça o deploy:
```bash
vercel
```

3. Para ambiente de produção:
```bash
vercel --prod
```

#### Netlify

1. Instale a CLI do Netlify:
```bash
npm install -g netlify-cli
```

2. Faça o deploy:
```bash
netlify deploy
```

3. Para ambiente de produção:
```bash
netlify deploy --prod
```

#### Deploy para Hostgator

Para fazer deploy em hospedagem compartilhada como a Hostgator:

1. Prepare os arquivos:
```bash
npm run deploy-hostgator
```

2. Faça upload dos arquivos para a Hostgator usando cPanel ou FTP.

3. Para instruções detalhadas, veja o [Guia de Deploy na Hostgator](./docs/deploy-hostgator.md).

#### Deploy com Docker

1. Construa a imagem:
```bash
docker build -t tenotec-website .
```

2. Execute o contêiner:
```bash
docker run -p 3000:3000 tenotec-website
```

#### Servidor Próprio

1. Gere a build de produção:
```bash
npm run build
```

2. Inicie o servidor:
```bash
npm run start
```

## 📝 Modificando o Conteúdo

### Alterando Textos

A maior parte do conteúdo textual está em `src/app/page.tsx` e nos componentes individuais dentro de `src/components/`.

### Alterando Cores

As cores estão definidas em `src/app/globals.css` dentro do bloco `:root`. Você pode alterar os valores hexadecimais para ajustar o esquema de cores.

### Adicionando Novos Projetos

Para adicionar novos projetos, edite o array `projects` em `src/components/Projects.tsx`.

### Alterando Informações de Contato

As informações de contato estão em `src/components/Contact.tsx` e `src/components/Footer.tsx`.

### Alterando Imagens

Para substituir as imagens de exemplo, você pode:
- Hospedar suas próprias imagens externamente e atualizar os URLs
- Adicionar imagens na pasta `public/` e referenciá-las nos componentes

## 📱 Recursos Responsivos

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- Layout desktop: 1024px e acima
- Layout tablet: 768px a 1023px
- Layout mobile: abaixo de 768px

## 🔧 Customizações Avançadas

### Adicionando Novas Páginas

1. Crie um novo arquivo em `src/app/` com o nome da rota desejada
2. Importe e utilize os componentes necessários

### Estendendo a Paleta de Cores

Para adicionar novas cores à paleta:
1. Adicione a variável CSS em `src/app/globals.css`
2. Adicione a referência em `tailwind.config.ts` na seção `colors`

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

TenoTec - [contato@tenotec.com.br](mailto:contato@tenotec.com.br)

---

Desenvolvido com ❤️ para a TenoTec © 2023
