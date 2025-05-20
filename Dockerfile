FROM node:18-alpine AS base

# Configuração de produção para melhor performance
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Instalar dependências apenas
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Construir a aplicação
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Executar a aplicação
FROM base AS runner
WORKDIR /app

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Configurar pasta de cache e outros diretórios necessários
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Expor a porta 3000
EXPOSE 3000

# Definir variáveis de ambiente em runtime
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Iniciar a aplicação
CMD ["node", "server.js"] 