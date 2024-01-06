import { Component } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { IProducts } from 'src/app/models/iproducts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  prdList!:IProducts[]
  catList!:ICategory[]
  totalPrice!:number
  selectedCatId:number=0
  dateNow!:Date
  constructor(){
    this.prdList=[
      {id:1,name:'p1',price:100,quantity:1,imgUrl:'https://picsum.photos/2000/1100',categoryId:1},
      {id:2,name:'p2',price:110,quantity:2,imgUrl:'https://picsum.photos/2000/1200',categoryId:2},
      {id:3,name:'p3',price:120,quantity:0,imgUrl:'https://picsum.photos/2000/1300',categoryId:3},
      {id:4,name:'p4',price:130,quantity:4,imgUrl:'https://picsum.photos/2000/1400',categoryId:4},
      {id:5,name:'p5',price:140,quantity:5,imgUrl:'https://picsum.photos/2000/1500',categoryId:5},
      {id:6,name:'p6',price:150,quantity:6,imgUrl:'https://picsum.photos/2000/1600',categoryId:6},
    ]
    this.catList=[
      {id:1,name:'c1'},
      {id:2,name:'c2'},
      {id:3,name:'c3'},
      {id:4,name:'c4'},
    ]
    this.dateNow=new Date()
  }
  buy(prdPrice:number,count:any){
     this.totalPrice=+count*prdPrice
  }
}
