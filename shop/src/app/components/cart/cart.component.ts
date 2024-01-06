import { Component } from '@angular/core';
import { CartData } from 'src/app/views/cart-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartDataDetail!:CartData
https: any;
  constructor(){
    this.cartDataDetail=new CartData('pq','https://picsum.photos/2000/1100','d1',4,1000,['cairo','alex'])
  }
}
