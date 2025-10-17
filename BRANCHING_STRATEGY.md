# Estratégia de Branching - Embaclass

## Prática Padrão de Desenvolvimento

A partir de agora, **todas as alterações** serão feitas em branches específicos seguindo as melhores práticas de desenvolvimento.

## Convenção de Nomes de Branch

### Tipos de Branch
- `feature/` - Novas funcionalidades
- `fix/` - Correções de bugs
- `hotfix/` - Correções urgentes
- `refactor/` - Refatorações de código
- `docs/` - Atualizações de documentação
- `style/` - Mudanças de estilo/formatação
- `test/` - Adição ou correção de testes

### Exemplos de Nomes
```bash
feature/category-pages
feature/product-search
feature/user-authentication
fix/header-navigation
fix/mobile-responsive
hotfix/critical-security-patch
refactor/components-structure
docs/api-documentation
style/tailwind-optimization
test/unit-tests-products
```

## Fluxo de Trabalho

### 1. Criar Branch para Nova Funcionalidade
```bash
git checkout main
git pull origin main
git checkout -b feature/nome-da-funcionalidade
```

### 2. Desenvolver e Commitar
```bash
# Fazer alterações
git add .
git commit -m "feat: descrição da funcionalidade"
```

### 3. Push do Branch
```bash
git push origin feature/nome-da-funcionalidade
```

### 4. Merge para Main (quando aprovado)
```bash
git checkout main
git merge feature/nome-da-funcionalidade
git push origin main
```

## Conventional Commits

### Formato
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Tipos
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, espaços em branco, etc.
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes
- `chore:` - Tarefas de manutenção

### Exemplos
```bash
feat: add category pages with individual product listings
fix: resolve TypeScript compilation errors in product components
docs: update README with new component documentation
style: improve responsive design for mobile devices
refactor: optimize product service data structure
test: add unit tests for category page component
chore: update dependencies and remove deprecated packages
```

## Branches Criados

### ✅ Implementados
- `feature/category-pages` - Páginas individuais de categoria
  - CategoryPageComponent
  - ProductSpecificationsComponent
  - Enhanced ProductCard
  - Navigation improvements

### 🔄 Próximos Branches Planejados
- `feature/product-search` - Sistema de busca de produtos
- `feature/contact-form` - Formulário de contato
- `feature/product-gallery` - Galeria de imagens dos produtos
- `fix/seo-optimization` - Otimizações de SEO
- `feature/admin-panel` - Painel administrativo

## Benefícios da Estratégia

### 🎯 **Organização**
- Cada funcionalidade em seu próprio branch
- Histórico limpo e rastreável
- Facilita code review

### 🔒 **Segurança**
- Main branch sempre estável
- Testes isolados por funcionalidade
- Rollback fácil se necessário

### 👥 **Colaboração**
- Múltiplos desenvolvedores podem trabalhar simultaneamente
- Conflitos minimizados
- Integração controlada

### 📊 **Rastreabilidade**
- Cada commit linkado a uma funcionalidade específica
- Histórico detalhado de mudanças
- Facilita debugging e manutenção

## Comandos Úteis

### Listar Branches
```bash
git branch -a  # Todos os branches
git branch -r  # Branches remotos
```

### Deletar Branch
```bash
git branch -d feature/nome-branch  # Local
git push origin --delete feature/nome-branch  # Remoto
```

### Verificar Status
```bash
git status
git log --oneline -10
```

## Implementação Atual

✅ **Branch Criado**: `feature/category-pages`  
✅ **Commit Realizado**: Páginas de categoria implementadas  
✅ **Arquivos Organizados**: 25 arquivos adicionados/modificados  
✅ **Documentação**: README completo criado  

A partir de agora, **toda nova funcionalidade** seguirá este padrão de branching! 🚀