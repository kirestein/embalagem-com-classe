import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridComponent } from './product-grid.component';

describe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading state when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.animate-pulse')).toBeTruthy();
  });

  it('should show empty state when no products', () => {
    component.loading = false;
    component.products = [];
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Nenhum produto encontrado');
  });

  it('should show products when available', () => {
    component.loading = false;
    component.products = [
      {
        id: 'test-1',
        name: 'Test Product',
        category: 'test',
        slug: 'test-product',
        images: ['test.png']
      }
    ];
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-product-card')).toBeTruthy();
  });
});