import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 0;
  relatedProducts: Product[] = [];
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.loadProductDetails(productId);
      this.loadRelatedProducts(productId);
    });
  }

  loadProductDetails(productId: number): void {
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  loadRelatedProducts(productId: number): void {
    this.productService.getRelatedProducts(productId).subscribe(products => {
      this.relatedProducts = products;
    });
  }

  incrementQuantity(): void {
    this.addToCart();
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart({
        ...this.product,
        quantity: this.quantity
      });
    }
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}