import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
  @Input() loading: boolean = false;
  @Input() showCategory: boolean = true;

  get hasProducts(): boolean {
    return this.products.length > 0;
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}