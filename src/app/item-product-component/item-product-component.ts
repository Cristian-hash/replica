import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-item-product-component',
  standalone: true,
  imports: [],
  templateUrl: './item-product-component.html',
  styleUrl: './item-product-component.css',
})
export class ItemProductComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();

  agregar() {
    this.add.emit(this.product);
  }
}
