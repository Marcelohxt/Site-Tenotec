const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🚀 Preparando arquivos para deploy na Hostgator...');

// Diretório de saída do Next.js
const outDir = path.join(__dirname, '..', 'out');

// Verificar se o diretório out existe
if (!fs.existsSync(outDir)) {
  console.error('❌ Diretório "out" não encontrado. Execute npm run export primeiro.');
  process.exit(1);
}

// Verificar se há um .htaccess e, se não, criar um
const htaccessPath = path.join(outDir, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  console.log('📝 Criando arquivo .htaccess para configurações do Apache...');
  
  const htaccessContent = `
# Força HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compressão de Gzip
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
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
`;

  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log('✅ Arquivo .htaccess criado com sucesso!');
}

// Verificar e criar arquivo de configuração do PHP
const phpInfoPath = path.join(outDir, 'phpinfo.php');
if (!fs.existsSync(phpInfoPath)) {
  console.log('📝 Criando arquivo phpinfo.php para verificar configurações da hospedagem...');
  
  const phpInfoContent = `<?php
// Exibe informações sobre a configuração do PHP
phpinfo();
?>`;

  fs.writeFileSync(phpInfoPath, phpInfoContent);
  console.log('✅ Arquivo phpinfo.php criado com sucesso!');
}

// Cria arquivo vazio para a Hostgator entender o uso do PHP
const emptyPhpPath = path.join(outDir, 'index.php');
if (!fs.existsSync(emptyPhpPath)) {
  console.log('📝 Criando arquivo index.php para a Hostgator...');
  
  const emptyPhpContent = `<?php
// Redireciona para o index.html
header("Location: index.html");
exit;
?>`;

  fs.writeFileSync(emptyPhpPath, emptyPhpContent);
  console.log('✅ Arquivo index.php criado com sucesso!');
}

// Criar arquivo ZIP para facilitar o upload
console.log('📦 Criando arquivo ZIP para upload...');
const zipFileName = 'tenotec-website-hostgator.zip';
const outputPath = path.join(__dirname, '..', zipFileName);

// Verificar se o sistema tem o comando zip
const zipCommand = process.platform === 'win32' 
  ? `powershell -command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${outputPath}' -Force"` 
  : `zip -r ${outputPath} ${outDir}/*`;

exec(zipCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Erro ao criar arquivo ZIP: ${error.message}`);
    console.log('Por favor, crie o ZIP manualmente da pasta "out".');
    console.log('✅ Preparação concluída! Faça o upload manual dos arquivos da pasta "out" para o diretório raiz da sua hospedagem na Hostgator.');
    return;
  }
  
  console.log(`✅ Arquivo ZIP criado em: ${zipFileName}`);
  console.log('');
  console.log('🚀 INSTRUÇÕES DE DEPLOY:');
  console.log('1. Acesse o cPanel da sua conta na Hostgator');
  console.log('2. Vá para o Gerenciador de Arquivos ou use FTP');
  console.log('3. Navegue até a pasta pública do seu domínio (geralmente public_html)');
  console.log('4. Faça upload do arquivo ZIP e extraia-o');
  console.log('   OU faça upload de todos os arquivos da pasta "out" diretamente');
  console.log('5. Verifique se o site está funcionando acessando seu domínio');
  console.log('');
  console.log('⚠️ Observações importantes:');
  console.log('- Se encontrar problemas com rotas, verifique as configurações de .htaccess');
  console.log('- Algumas funcionalidades dinâmicas podem não funcionar em hospedagem compartilhada');
  console.log('- Para funcionalidades dinâmicas completas, considere um serviço como Vercel ou Netlify');
});

console.log('✅ Preparação de arquivos concluída!');
console.log('📤 Após o upload, seu site estará disponível no domínio configurado na Hostgator.'); 