# Componente WhatsApp Button

Este componente adiciona um botão flutuante do WhatsApp ao site, permitindo que os visitantes entrem em contato diretamente via WhatsApp.

## Características

- **Botão flutuante**: Posicionado fixo no canto inferior direito
- **Responsivo**: Em telas pequenas, mostra apenas o ícone
- **Animação**: Efeito de pulso para chamar atenção
- **Acessível**: Inclui aria-label e title para acessibilidade
- **Personalizável**: Fácil de modificar número e mensagem

## Como usar

1. Importe o componente:
```typescript
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
```

2. Adicione aos imports do seu componente:
```typescript
@Component({
  // ...
  imports: [WhatsappButtonComponent],
  // ...
})
```

3. Use no template:
```html
<app-whatsapp-button />
```

## Personalização

### Alterar número do WhatsApp

Edite a propriedade `phoneNumber` no arquivo `whatsapp-button.component.ts`:

```typescript
phoneNumber = '5511999999999'; // Substitua pelo número real
```

**Formato do número**: Código do país + DDD + número (sem espaços, traços ou parênteses)
- Exemplo Brasil: `5511999999999` (55 = Brasil, 11 = São Paulo, 999999999 = número)

### Alterar mensagem padrão

Edite a propriedade `defaultMessage` no arquivo `whatsapp-button.component.ts`:

```typescript
defaultMessage = 'Sua mensagem personalizada aqui!';
```

### Personalizar estilo

Edite o arquivo `whatsapp-button.component.css` para alterar:
- Cores
- Posição
- Tamanho
- Animações
- Responsividade

## Funcionalidades

- **Click**: Abre o WhatsApp Web ou aplicativo com a mensagem pré-preenchida
- **Hover**: Efeito visual de destaque
- **Mobile**: Otimizado para dispositivos móveis

## Compatibilidade

- Funciona em todos os navegadores modernos
- Compatível com WhatsApp Web e aplicativo móvel
- Responsivo para desktop, tablet e mobile