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
      name: 'One piece - 002',
      description: 'Franky shogun machine - One Piece series',
      price: 3600
    });
    this.products.push({
      photo: 'https://i.pinimg.com/736x/7c/09/cf/7c09cf12478684c6a5cc938f59e70a4a.jpg',
      name: 'One piece - 003',
      description: 'Zoro juro - One Piece series',
      price: 3800
    });
    this.products.push({
      photo: 'https://meccha-japan.com/47634-large_default/figure-kaido-one-piece-portrait-of-pirates.jpg',
      name: 'One piece - 004',
      description: 'Yonkou Kaido - One Piece series',
      price: 4000
    });
    this.products.push({
      photo: 'https://i.pinimg.com/originals/5a/12/ca/5a12ca2f61eed1e05a514f52e7443db8.jpg',
      name: 'One piece - 005',
      description: 'Yonkou Shanks - One Piece series',
      price: 1600
    });
    this.products.push({
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8A55Ssf-hdTp5Bq2zIzLpSGc_Nz69zJUhQ&usqp=CAU',
      name: 'One piece - 006',
      description: 'Admirante Akainu - One Piece series',
      price: 1800
    });
    this.products.push({
      photo: 'https://stockx.imgix.net/products/collectibles/Jason-Freeny-Hidden-Dissectables-One-Piece-Zoro-Figure.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985',
      name: 'One piece - 007',
      description: 'Zoro esqueleto- One Piece series',
      price: 999
    });
    this.products.push({
      photo: 'https://image.made-in-china.com/2f0j00jVHRpnGDCIbJ/Newest-Janpan-Anime-One-Piece-Figure-Mini-PVC-Action-Figures.jpg',
      name: 'One piece - 008',
      description: 'Set chibi - One Piece series',
      price: 5600
    });
    this.products.push({
      photo: 'https://cdn.shopify.com/s/files/1/0016/0982/6416/products/product-image-551560803_642x.jpg?v=1571712168',
      name: 'One piece - 009',
      description: 'Marco el Fénix - One Piece series',
      price: 2300
    });
    this.products.push({
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhkxgcy9fsOBrqxnm7XMbIsNBcEzEdOGULA&usqp=CAU',
      name: 'One piece - 010',
      description: 'Portgas D. Ace - One Piece series',
      price: 2400
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
