import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';
import { WhatsappButtonComponent } from '../../components/whatsapp-button/whatsapp-button.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { ProductCategory, Product } from '../../models/product.model';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    WhatsappButtonComponent,
    ProductGridComponent,
    ProductCardComponent
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  category: ProductCategory | null = null;
  products: Product[] = [];
  loading: boolean = true;
  categorySlug: string = '';
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.categorySlug = params['category'];
      this.loadCategoryData();
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private loadCategoryData() {
    this.loading = true;
    
    // Simular um pequeno delay para mostrar o loading
    setTimeout(() => {
      const foundCategory = this.productsService.getCategoryBySlug(this.categorySlug);
      this.category = foundCategory || null;
      
      if (this.category) {
        this.products = [...this.category.products];
      } else {
        // Categoria não encontrada, redirecionar para produtos
        this.router.navigate(['/products']);
        return;
      }
      
      this.loading = false;
    }, 300);
  }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  get relatedCategories(): ProductCategory[] {
    const allCategories = this.productsService.getProductCategories();
    return allCategories
      .filter(cat => cat.slug !== this.categorySlug)
      .slice(0, 4); // Mostrar apenas 4 categorias relacionadas
  }

  navigateToCategory(categorySlug: string) {
    this.router.navigate(['/products', categorySlug]);
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}