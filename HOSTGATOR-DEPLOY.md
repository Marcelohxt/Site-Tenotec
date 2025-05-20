# Guia Rápido: Deploy na Hostgator

Este guia ajudará você a fazer o deploy do site TenoTec em uma hospedagem compartilhada Hostgator.

## 1. Preparação de Arquivos para Hospedagem Compartilhada

### 1.1. Configure o projeto para exportação estática

Certifique-se de que o arquivo `next.config.js` esteja configurado conforme abaixo:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
```

### 1.2. Gere os arquivos estáticos

```bash
# Limpe qualquer build anterior
rmdir /s /q .next
rmdir /s /q out

# Execute o build estático
npm run build
```

Isso criará uma pasta `out` com uma versão estática do site.

### 1.3. Crie o arquivo .htaccess

Crie um arquivo chamado `.htaccess` dentro da pasta `out` com o seguinte conteúdo:

```apache
# Força HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compressão Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>

# Cache para arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Se a rota não existir, redireciona para o index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### 1.4. Prepare os arquivos PHP necessários

Crie um arquivo `index.php` na pasta `out` com o seguinte conteúdo:

```php
<?php
// Redireciona para o index.html
header("Location: index.html");
exit;
?>
```

## 2. Upload de Arquivos para a Hostgator

### 2.1. Acesse o cPanel

1. Entre no cPanel da sua conta Hostgator (normalmente em `https://seudominio.com/cpanel`)
2. Use as credenciais fornecidas pela Hostgator

### 2.2. Upload via Gerenciador de Arquivos

1. No cPanel, abra o "Gerenciador de Arquivos"
2. Navegue até a pasta raiz do seu domínio (geralmente `public_html`)
3. Remova ou faça backup de quaisquer arquivos existentes
4. Clique em "Upload" e faça upload de todos os arquivos da pasta `out`
   - Certifique-se de que o arquivo `.htaccess` também seja incluído

### 2.3. Alternativa: Upload via FTP

1. Use um cliente FTP (como FileZilla)
2. Conecte-se com seus dados de FTP fornecidos pela Hostgator
3. Faça upload de todos os arquivos da pasta `out` para a pasta raiz do domínio

## 3. Verificação

1. Acesse seu domínio (`https://seudominio.com`)
2. Verifique se o site está funcionando corretamente
3. Teste todas as páginas e recursos

## 4. Solução de Problemas

Se o site não funcionar corretamente:

1. Verifique se o mod_rewrite está habilitado (contate o suporte da Hostgator)
2. Confirme se todos os arquivos foram carregados, incluindo o `.htaccess`
3. Verifique se as permissões de arquivo estão corretas (644 para arquivos, 755 para pastas)

## Limitações

Esta abordagem tem algumas limitações:

- Funcionalidades de servidor (APIs, autenticação, etc.) não funcionarão
- Páginas dinâmicas não serão suportadas
- As atualizações de conteúdo exigirão um novo deploy completo

Para um site totalmente dinâmico, considere usar plataformas como Vercel ou Netlify. 