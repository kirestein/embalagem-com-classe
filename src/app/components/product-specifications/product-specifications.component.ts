import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-specifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-specifications.component.html',
  styleUrl: './product-specifications.component.css'
})
export class ProductSpecificationsComponent {
  @Input() product!: Product;

  get hasSpecifications(): boolean {
    return !!(this.product?.specifications && this.product.specifications.length > 0);
  }

  get hasFeatures(): boolean {
    return !!(this.product?.features && this.product.features.length > 0);
  }

  get hasApplications(): boolean {
    return !!(this.product?.applications && this.product.applications.length > 0);
  }

  get hasAnyDetails(): boolean {
    return this.hasSpecifications || this.hasFeatures || this.hasApplications;
  }
}