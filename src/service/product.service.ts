
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Cheese Burger',
      price: 389,
      imageUrl: '/assets/images/burger.jpg',
      description: 'Some are cheesy, others can be a little dry, and the rare few are a disaster. There are so many cheeseburgers out there it can be hard to commit to just one favourite. That being said, when you know, you just know',
      category: 'popular',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Chicken Burger',
      price: 389,
      imageUrl: '/assets/images/chicken_burger.jpg',
      description: 'Juicy chicken patty with lettuce, tomato, and special sauce.Everyone has their perfect match. Sometimes it’s just around the corner, other times you have to travel the world in search of it. Wherever your perfect cheeseburger is, it’s out there.',
      category: 'popular',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Beef   Burger',
      price: 399,
      imageUrl: '/assets/images/beef-burger.jpg',
      description: 'Premium beef patty with fresh vegetables and special sauce.They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back.',
      category: 'special',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Veggie Burger',
      price: 349,
      imageUrl: '/assets/images/veggie-burger.jpg',
      description: 'Delicious vegetable patty with lettuce, tomato, and special sauce.Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended.',
      category: 'special',
      rating: 4.2
    },
    {
      id: 5,
      name: ' Cheese Burger',
      price: 449,
      imageUrl: '/assets/images/chess_burger.jpg',
      description: 'Think of cheeseburgers like a Tinder match. They might not all be your soulmate but you’ve gotta find out to be sure. It can get a little messy and that’s just part of the fun',
      category: 'new',
      rating: 4.8
    },
    {
      id: 6,
      name: ' Chicken Burger',
      price: 399,
      imageUrl: '/assets/images/spicy-chicken-burger.jpg',
      description: 'Spicy chicken patty with lettuce, tomato, and special sauce.Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need',
      category: 'new',
      rating: 4.4
    }
  ];

  private relatedProducts: any = {
    1: [
      { id: 7, name: 'Pizza', imageUrl: '/assets/images/pizza.jpg' },
      { id: 8, name: 'Fries', imageUrl: '/assets/images/fries.jpg' },
      { id: 9, name: 'Nuggets', imageUrl: '/assets/images/nuggets.jpg' }
    ],
    2: [
      { id: 7, name: 'Pizza', imageUrl: '/assets/images/pizza.jpg' },
      { id: 8, name: 'Fries', imageUrl: '/assets/images/fries.jpg' },
      { id: 9, name: 'Nuggets', imageUrl: '/assets/images/nuggets.jpg' }
    ],
    3: [
      { id: 7, name: 'Pizza', imageUrl: '/assets/images/pizza.jpg' },
      { id: 8, name: 'Fries', imageUrl: '/assets/images/fries.jpg' },
      { id: 9, name: 'Nuggets', imageUrl: '/assets/images/nuggets.jpg' }
    ],
    4: [
      { id: 7, name: 'Pizza', imageUrl: '/assets/images/pizza.jpg' },
      { id: 8, name: 'Fries', imageUrl: '/assets/images/fries.jpg' },
      { id: 9, name: 'Nuggets', imageUrl: '/assets/images/nuggets.jpg' }
    ],
    5: [
      { id: 7, name: 'Pizza', imageUrl: '/assets/images/pizza.jpg' },
      { id: 8, name: 'Fries', imageUrl: '/assets/images/fries.jpg' },
      { id: 9, name: 'Nuggets', imageUrl: '/assets/images/nuggets.jpg' }
    ],
    6: [
      { id: 7, name: 'Pizza', imageUrl: '/assets/images/pizza.jpg' },
      { id: 8, name: 'Fries', imageUrl: '/assets/images/fries.jpg' },
      { id: 9, name: 'Nuggets', imageUrl: '/assets/images/nuggets.jpg' }
    ]
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | null> {
    const product = this.products.find(p => p.id === id);
    return of(product || null);
  }

  getRelatedProducts(productId: number): Observable<Product[]> {
    return of(this.relatedProducts[productId] || []);
  }
}