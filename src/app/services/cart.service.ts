import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/productos.json');
  }

  add(product: Product) {
    this.items.push(product);
  }

  remove(product: Product) {
    this.items = this.items.filter((p) => p !== product);
  }

  getItems(): Product[] {
    return this.items;
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].price;
    }
    return total;
  }

  empty() {
    return (this.items = []);
  }
}
