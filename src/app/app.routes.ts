import { Routes } from '@angular/router';
import { ProductsComponent } from './products-component/products-component';
import { CartComponent } from './cart-component/cart-component';
export const routes: Routes = [
  {
    path: 'producto',
    component: ProductsComponent,
  },

  {
    path: 'carrito',
    component: CartComponent,
  },
];
