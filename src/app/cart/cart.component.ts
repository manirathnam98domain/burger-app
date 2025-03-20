import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  subtotal: number = 0;
  discount: number = 0;
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotals();
  }

  incrementQuantity(item: Product): void {
    this.cartService.incrementQuantity(item);
    this.loadCartItems();
  }

  decrementQuantity(item: Product): void {
    this.cartService.decrementQuantity(item);
    this.loadCartItems();
  }

  removeItem(item: Product): void {
    this.cartService.removeFromCart(item);
    this.loadCartItems();
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((total, item) => {
      return total + (item.price * (item.quantity || 1));
    }, 0);
    
    // Apply discount (for demo purposes, 10% discount)
    this.discount = Math.round(this.subtotal * 0.1);
    this.total = this.subtotal - this.discount;
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  checkout(item:any) {
    console.log('Proceeding to checkout');
    console.log('Proceeding to checkout',item);
    console.log(this.total);
    // Implement checkout process
  }
}