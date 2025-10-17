import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ProductSpecificationsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showCategory: boolean = true;
  @Input() expandable: boolean = false;
  
  isExpanded: boolean = false;

  onImageError(event: any) {
    // Fallback para imagem padrão se a imagem não carregar
    event.target.src = 'assets/images/placeholder-product.svg';
  }

  onProductClick() {
    if (this.expandable) {
      this.toggleExpanded();
    } else {
      // Aqui podemos implementar navegação para detalhes do produto
      console.log('Produto clicado:', this.product);
    }
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  get hasDetails(): boolean {
    return !!(this.product?.specifications?.length || 
              this.product?.features?.length || 
              this.product?.applications?.length);
  }
}