# Guia de Deploy na Hostgator

Este guia explica como fazer o deploy do site TenoTec em uma hospedagem compartilhada Hostgator.

## Preparação

Antes de começar, certifique-se de que:

1. Você possui uma conta na Hostgator com um plano de hospedagem compartilhada
2. Você possui um domínio configurado na Hostgator
3. Você tem acesso ao cPanel da sua conta

## Passo 1: Preparar o Site para Deploy

O site TenoTec é construído com Next.js, que normalmente requer um servidor Node.js. No entanto, adaptamos o projeto para funcionar como um site estático em hospedagem compartilhada.

Execute o comando:

```bash
# No Windows
deploy.bat
# Escolha a opção 4) Deploy para Hostgator

# Ou diretamente via npm
npm run deploy-hostgator
```

Este comando irá:
- Gerar uma versão estática do site
- Criar os arquivos necessários para a hospedagem
- Criar um arquivo ZIP com todos os arquivos prontos para upload

## Passo 2: Upload para a Hostgator

### Método 1: Upload via cPanel (recomendado para iniciantes)

1. Acesse o cPanel da sua conta Hostgator (geralmente em `https://seudominio.com/cpanel` ou fornecido nos emails da Hostgator)
2. Procure e clique no ícone "Gerenciador de Arquivos"
3. Navegue até a pasta raiz do seu domínio (geralmente `public_html`)
4. Clique em "Upload" no topo da página
5. Faça upload do arquivo ZIP gerado (`tenotec-website-hostgator.zip`)
6. Volte ao Gerenciador de Arquivos, selecione o arquivo ZIP e clique em "Extract"
7. Extraia todos os arquivos diretamente na pasta raiz (`public_html`)

### Método 2: Upload via FTP (recomendado para usuários avançados)

1. Use um cliente FTP como FileZilla, Cyberduck ou WinSCP
2. Conecte-se ao seu servidor com as credenciais FTP fornecidas pela Hostgator
3. Navegue até a pasta raiz do seu domínio (geralmente `public_html`)
4. Faça upload de todos os arquivos da pasta `out` para a pasta raiz do seu domínio

## Passo 3: Verificação

1. Acesse seu domínio no navegador (`https://seudominio.com`)
2. Verifique se o site está funcionando corretamente
3. Teste a navegação entre as diferentes seções do site
4. Verifique se todas as imagens e estilos estão carregando corretamente

## Solução de Problemas

### Problema 1: Página em branco ou erro 500

Verifique se todos os arquivos foram corretamente extraídos ou carregados. O arquivo `.htaccess` é especialmente importante.

### Problema 2: Links não funcionam corretamente

Verifique o arquivo `.htaccess` na raiz do seu domínio. Ele deve conter as regras de reescrita conforme gerado pelo script. Se o problema persistir, entre em contato com o suporte da Hostgator para confirmar se o mod_rewrite está ativado.

### Problema 3: Imagens não aparecem

Verifique se as imagens foram carregadas para o local correto. As imagens devem estar na pasta `_next/static/images` ou em `public/images`.

## Limitações

A hospedagem compartilhada como a Hostgator tem algumas limitações para aplicações Next.js:

1. **Funcionalidades dinâmicas**: APIs, autenticação e outras funcionalidades do lado do servidor não funcionarão
2. **Revalidação on-demand**: Não é possível revalidar páginas sob demanda
3. **Middleware**: Não funcionará no ambiente de hospedagem compartilhada

Para um site totalmente funcional com todos os recursos do Next.js, considere usar plataformas como Vercel ou Netlify.

## Atualização do Site

Quando precisar atualizar o site, repita o processo acima. Recomendamos fazer backup dos arquivos antes de atualizar. 