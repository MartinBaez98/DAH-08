import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Products[] = new Array();
  private cart: Products[] = new Array();

  constructor() {
    this.products.push({
      photo: 'https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bas58971.jpg',
      name: 'One piece - 001',
      description: 'Luffy Red Hawk - One Piece series',
      price: 2600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://images-na.ssl-images-amazon.com/images/I/71p2odyaQ8L._AC_SX425_.jpg',
      name: 'One piece - 005',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
   }

   getProducts(): Products[] {
     return this.products;
   }

   getCart(): Products[] {
     return this.cart;
   }

   addCart(pos: number){
     this.cart.push(this.products[pos]);
   }

   getTotalPrice(): number {
     let totalPrice = 0;
     for (let i=0; i < this.cart.length; i++){
      totalPrice += this.cart[i].price;
     }
     return totalPrice;
   }

   getProductCount(): number {
     return this.cart.length;
   }
}
