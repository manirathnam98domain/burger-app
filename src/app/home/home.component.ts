import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';
import { Product } from '../model/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  popularItems: Product[] = [];
  specialOffers: Product[] = [];
  newArrivals: Product[] = [];
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.popularItems = products.filter(p => p.category === 'popular');
      this.specialOffers = products.filter(p => p.category === 'special');
      this.newArrivals = products.filter(p => p.category === 'new');
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  searchProducts(): void {
    // Filter products based on search query
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality
  }
}