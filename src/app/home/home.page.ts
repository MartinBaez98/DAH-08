import { Component } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  openStore(){
    this.router.navigate(['/store']);
  }

  openCart(){
    this.router.navigate(['/cart']);
  }

}
