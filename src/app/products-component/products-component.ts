import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

import { ItemProductComponent } from '../item-product-component/item-product-component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ItemProductComponent],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  addToCart(product: Product) {
    this.cartService.add(product);
    //console.log('Agregado al carrito:', product);
  }
}
