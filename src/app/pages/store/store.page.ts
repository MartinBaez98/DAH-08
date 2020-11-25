import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage {

  products: Products[] = new Array();

  constructor(private productService: ProductsService, private alert: AlertController, public toastController: ToastController) {
    this.getAll();
  }

  getAll(): void{
    this.products = this.productService.getProducts();
  }

  async showAlert(pos: number){
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Quiere agregarlo al carrito?',
      buttons: [{text: 'No'},
      {text: 'Sí', handler: () => {
          this.productService.addCart(pos);
          this.presentToast();
        }
      }]
    });
    await al.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Producto agregado.',
      duration: 2000
    });
    toast.present();
  }

}
