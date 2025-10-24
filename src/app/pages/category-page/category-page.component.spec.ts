import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { CategoryPageComponent } from './category-page.component';
import { ProductsService } from '../../services/products.service';

describe('CategoryPageComponent', () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockProductsService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      params: of({ category: 'test-category' })
    };
    mockProductsService = jasmine.createSpyObj('ProductsService', ['getCategoryBySlug', 'getProductCategories']);

    await TestBed.configureTestingModule({
      imports: [CategoryPageComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ProductsService, useValue: mockProductsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load category data on init', () => {
    const mockCategory = {
      id: 'test',
      name: 'Test Category',
      slug: 'test-category',
      description: 'Test description',
      products: []
    };

    mockProductsService.getCategoryBySlug.and.returnValue(mockCategory);
    mockProductsService.getProductCategories.and.returnValue([mockCategory]);

    component.ngOnInit();

    expect(component.categorySlug).toBe('test-category');
  });

  it('should navigate to products page when category not found', () => {
    mockProductsService.getCategoryBySlug.and.returnValue(undefined);

    component.ngOnInit();

    setTimeout(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/products']);
    }, 400);
  });
});