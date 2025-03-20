import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) { }
  isFavorite: boolean = false;
  goToHome(): void {
    this.router.navigate(['']);
  }

  goToCategories(): void {
    // Implement categories navigation
    this.router.navigate(['/product/1']);
  }

  goToSearch(): void {
    // Implement search navigation
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  goToProfile(): void {
    // Implement profile navigation
  }
}
