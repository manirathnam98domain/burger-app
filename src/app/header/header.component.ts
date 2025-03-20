
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Burger Queen';

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  goToHome(): void {
    this.router.navigate(['']);
  }

  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }
}