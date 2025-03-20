import { Injectable } from '@angular/core';
import { Product } from '../app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  constructor() { }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + (product.quantity || 1);
    } else {
      this.cartItems.push({
        ...product,
        quantity: product.quantity || 1
      });
    }
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }

  incrementQuantity(product: Product): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    }
  }

  decrementQuantity(product: Product): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem && existingItem.quantity && existingItem.quantity > 1) {
      existingItem.quantity--;
    } else if (existingItem) {
      this.removeFromCart(product);
    }
  }

  getCartItemCount(): number {
    return this.cartItems.reduce((count, item) => count + (item.quantity || 1), 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}