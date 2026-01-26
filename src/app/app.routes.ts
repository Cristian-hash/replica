import { Routes } from '@angular/router';
import { ProductsComponent } from './products-component/products-component';
import { CartComponent } from './cart-component/cart-component';
export const routes: Routes = [
  { path: '', redirectTo: 'producto', pathMatch: 'full' },
  {
    path: 'producto',
    component: ProductsComponent,
  },

  {
    path: 'carrito',
    component: CartComponent,
  },
];
