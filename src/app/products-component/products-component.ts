import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().suscribe((product) => {
      this.product = product;
    });
  }
}
