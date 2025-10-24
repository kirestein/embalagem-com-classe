# Componentes de Produtos - Embaclass

Este documento descreve os componentes criados para exibir produtos na aplicação Embaclass.

## Componentes Criados

### 1. ProductCard Component
**Localização:** `src/app/components/product-card/`

**Propósito:** Exibe um produto individual em formato de card.

**Inputs:**
- `product: Product` - Dados do produto a ser exibido
- `showCategory: boolean` - Se deve mostrar o badge da categoria (padrão: true)

**Funcionalidades:**
- Exibe imagem do produto com fallback para placeholder
- Mostra nome e descrição do produto
- Badge da categoria (opcional)
- Efeitos hover e animações
- Tratamento de erro de imagem
- Click handler para navegação futura

### 2. CategoryFilter Component
**Localização:** `src/app/components/category-filter/`

**Propósito:** Permite filtrar produtos por categoria.

**Inputs:**
- `categories: ProductCategory[]` - Lista de categorias disponíveis
- `selectedCategory: string | null` - Categoria atualmente selecionada

**Outputs:**
- `categorySelected: EventEmitter<string | null>` - Emite quando uma categoria é selecionada

**Funcionalidades:**
- Botões de filtro para desktop
- Dropdown para mobile
- Botão "Todos" para limpar filtros
- Indicador visual da categoria selecionada
- Contador de produtos

### 3. ProductGrid Component
**Localização:** `src/app/components/product-grid/`

**Propósito:** Organiza e exibe produtos em grid responsivo.

**Inputs:**
- `products: Product[]` - Lista de produtos a serem exibidos
- `loading: boolean` - Estado de carregamento
- `showCategory: boolean` - Se deve mostrar categorias nos cards

**Funcionalidades:**
- Grid responsivo (1-4 colunas dependendo da tela)
- Estado de loading com skeleton
- Estado vazio quando não há produtos
- Animações de entrada escalonadas
- Contador de produtos
- TrackBy para performance

## Estrutura da Página de Produtos

A página de produtos (`ProductsPageComponent`) integra todos os componentes:

```typescript
// Fluxo de dados
ProductsService → ProductsPageComponent → CategoryFilter + ProductGrid → ProductCard
```

### Estados da Aplicação

1. **Loading:** Mostra skeleton loading
2. **Produtos Disponíveis:** Exibe grid com produtos
3. **Sem Produtos:** Mostra estado vazio com call-to-action
4. **Filtrado:** Produtos filtrados por categoria

### Responsividade

- **Mobile (< 640px):** 1 coluna, dropdown para filtros
- **Tablet (640px - 768px):** 2 colunas
- **Desktop (768px - 1024px):** 3 colunas
- **Large Desktop (> 1024px):** 4 colunas

## Animações e UX

### Animações Implementadas
- Fade in up para produtos
- Hover effects nos cards
- Skeleton loading
- Transições suaves entre estados

### Acessibilidade
- Focus states para navegação por teclado
- Alt text para imagens
- Semantic HTML
- ARIA labels onde necessário

## Próximos Passos

1. **Navegação para Detalhes:** Implementar roteamento para página de detalhes do produto
2. **Busca:** Adicionar campo de busca por nome/descrição
3. **Ordenação:** Permitir ordenar por nome, categoria, etc.
4. **Paginação:** Para grandes quantidades de produtos
5. **Favoritos:** Sistema de produtos favoritos
6. **Compartilhamento:** Botões de compartilhamento social

## Tecnologias Utilizadas

- **Angular 18:** Framework principal
- **Tailwind CSS:** Estilização e responsividade
- **TypeScript:** Tipagem forte
- **Standalone Components:** Arquitetura moderna do Angular
- **RxJS:** Para gerenciamento de estado (futuro)

## Performance

- **TrackBy Functions:** Para otimizar renderização de listas
- **OnPush Strategy:** Pode ser implementada para melhor performance
- **Lazy Loading:** Para imagens (pode ser adicionado)
- **Virtual Scrolling:** Para grandes listas (futuro)