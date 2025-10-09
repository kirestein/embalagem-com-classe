# Deploy no Vercel - EmbaClass

Este projeto está configurado para deploy automático no Vercel.

## Configuração Automática

O projeto já está configurado com:

- ✅ `vercel.json` - Configuração do Vercel
- ✅ `.vercelignore` - Arquivos ignorados no deploy
- ✅ Scripts de build otimizados
- ✅ Configurações de environment
- ✅ Configuração de produção no Angular

## Como fazer o deploy

### Opção 1: Deploy via GitHub (Recomendado)

1. **Conecte o repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe o repositório `kirestein/embalagem-com-classe`

2. **Configurações automáticas:**
   - Framework: Angular (detectado automaticamente)
   - Build Command: `npm run build`
   - Output Directory: `dist/embaclass`
   - Install Command: `npm install`

3. **Deploy:**
   - Clique em "Deploy"
   - O Vercel fará o build e deploy automaticamente

### Opção 2: Deploy via Vercel CLI

1. **Instale o Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd /home/kirestein/embaclass/embaclass
   vercel
   ```

## Configurações do Projeto

### Scripts disponíveis:
- `npm run build` - Build de produção
- `npm run build:dev` - Build de desenvolvimento
- `npm run vercel-build` - Build específico para Vercel

### Environments:
- **Development:** `src/environments/environment.ts`
- **Production:** `src/environments/environment.prod.ts`

### Otimizações incluídas:
- Compressão de assets
- Cache de arquivos estáticos
- Redirecionamento para SPA (Single Page Application)
- Build otimizado para produção

## URLs após o deploy

Após o deploy, você receberá:
- **URL de produção:** `https://embalagem-com-classe.vercel.app`
- **URLs de preview:** Para cada commit/branch

## Atualizações automáticas

O Vercel fará deploy automaticamente quando:
- Você fizer push para a branch `main`
- Você fizer push para qualquer branch (preview deploy)

## Monitoramento

No dashboard do Vercel você pode:
- Ver logs de build
- Monitorar performance
- Configurar domínio customizado
- Ver analytics de uso