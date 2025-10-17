import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
  @Input() categories: ProductCategory[] = [];
  @Input() selectedCategory: string | null = null;
  @Output() categorySelected = new EventEmitter<string | null>();

  onCategoryClick(categoryId: string | null) {
    this.selectedCategory = categoryId;
    this.categorySelected.emit(categoryId);
  }

  isSelected(categoryId: string | null): boolean {
    return this.selectedCategory === categoryId;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}