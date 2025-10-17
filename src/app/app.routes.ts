import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'products/:category',
    component: ProductsPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
