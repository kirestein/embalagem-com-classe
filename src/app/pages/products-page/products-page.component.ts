import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';
import { CategoryFilterComponent } from '../../components/category-filter/category-filter.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { ProductsService } from '../../services/products.service';
import { Product, ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent, 
    WhatsappButtonComponent,
    CategoryFilterComponent,
    ProductGridComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {
  categories: ProductCategory[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string | null = null;
  loading: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.loading = true;
    
    // Simular um pequeno delay para mostrar o loading
    setTimeout(() => {
      this.categories = this.productsService.getProductCategories();
      this.allProducts = this.getAllProductsFromCategories();
      this.filteredProducts = [...this.allProducts];
      this.loading = false;
    }, 500);
  }

  private getAllProductsFromCategories(): Product[] {
    const products: Product[] = [];
    this.categories.forEach(category => {
      products.push(...category.products);
    });
    return products;
  }

  onCategorySelected(categoryId: string | null) {
    this.selectedCategory = categoryId;
    
    if (categoryId === null) {
      // Mostrar todos os produtos
      this.filteredProducts = [...this.allProducts];
    } else {
      // Filtrar produtos da categoria selecionada
      const category = this.categories.find(cat => cat.id === categoryId);
      this.filteredProducts = category ? [...category.products] : [];
    }
  }

  get totalProductsCount(): number {
    return this.allProducts.length;
  }

  get filteredProductsCount(): number {
    return this.filteredProducts.length;
  }
}