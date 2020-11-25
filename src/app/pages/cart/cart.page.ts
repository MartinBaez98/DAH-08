import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartTotalPrice = 0;
  cartCount = 0;

  cart: Products[] = new Array();

  constructor(private productService: ProductsService) {
    this.getProductsCart();
    this.getCartData();
  }

  getProductsCart(): void{
    this.cart = this.productService.getCart();
  }

  getCartData(): void{
    this.cartTotalPrice = this.productService.getTotalPrice();
    this.cartCount = this.productService.getProductCount();
  }
}
