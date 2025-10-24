import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterComponent } from './category-filter.component';

describe('CategoryFilterComponent', () => {
  let component: CategoryFilterComponent;
  let fixture: ComponentFixture<CategoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFilterComponent);
    component = fixture.componentInstance;
    
    // Mock categories for testing
    component.categories = [
      {
        id: 'test1',
        name: 'Test Category 1',
        slug: 'test-1',
        products: []
      },
      {
        id: 'test2',
        name: 'Test Category 2',
        slug: 'test-2',
        products: []
      }
    ];
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit categorySelected when category is clicked', () => {
    spyOn(component.categorySelected, 'emit');
    
    component.onCategoryClick('test1');
    
    expect(component.categorySelected.emit).toHaveBeenCalledWith('test1');
    expect(component.selectedCategory).toBe('test1');
  });

  it('should return correct category name', () => {
    const categoryName = component.getCategoryName('test1');
    expect(categoryName).toBe('Test Category 1');
  });
});