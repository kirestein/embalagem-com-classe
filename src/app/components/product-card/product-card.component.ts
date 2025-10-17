import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showCategory: boolean = true;

  onImageError(event: any) {
    // Fallback para imagem padrão se a imagem não carregar
    event.target.src = 'assets/images/placeholder-product.svg';
  }

  onProductClick() {
    // Aqui podemos implementar navegação para detalhes do produto
    console.log('Produto clicado:', this.product);
  }
}