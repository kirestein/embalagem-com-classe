import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificationsComponent } from './product-specifications.component';

describe('ProductSpecificationsComponent', () => {
  let component: ProductSpecificationsComponent;
  let fixture: ComponentFixture<ProductSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSpecificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSpecificationsComponent);
    component = fixture.componentInstance;
    
    // Mock product data
    component.product = {
      id: 'test-1',
      name: 'Test Product',
      category: 'test',
      slug: 'test-product',
      images: ['test.png'],
      specifications: [
        { name: 'Capacidade', value: '500', unit: 'ml' }
      ],
      features: ['Feature 1', 'Feature 2'],
      applications: ['Application 1', 'Application 2']
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect specifications', () => {
    expect(component.hasSpecifications).toBeTruthy();
  });

  it('should detect features', () => {
    expect(component.hasFeatures).toBeTruthy();
  });

  it('should detect applications', () => {
    expect(component.hasApplications).toBeTruthy();
  });

  it('should show specifications section when product has specifications', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.specifications-section')).toBeTruthy();
  });
});