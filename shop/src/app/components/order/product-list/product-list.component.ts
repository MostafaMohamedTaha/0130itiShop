import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { IProducts } from 'src/app/models/iproducts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit ,OnChanges{
  prdList!: IProducts[]
  prdListOfCat: IProducts[] = []
  catList!: ICategory[]
  totalPrice!: number
  // selectedCatId!: number
  @Input() sentCatId!:number
  dateNow!: Date
  constructor() {
    this.prdList = [
      { id: 1, name: 'p1', price: 100, quantity: 1, imgUrl: 'https://picsum.photos/2000/1100', categoryId: 1 },
      { id: 2, name: 'p2', price: 110, quantity: 2, imgUrl: 'https://picsum.photos/2000/1200', categoryId: 2 },
      { id: 3, name: 'p3', price: 120, quantity: 0, imgUrl: 'https://picsum.photos/2000/1300', categoryId: 3 },
      { id: 4, name: 'p4', price: 130, quantity: 4, imgUrl: 'https://picsum.photos/2000/1400', categoryId: 4 },
      { id: 5, name: 'p5', price: 140, quantity: 5, imgUrl: 'https://picsum.photos/2000/1500', categoryId: 1 },
      { id: 6, name: 'p6', price: 150, quantity: 6, imgUrl: 'https://picsum.photos/2000/1600', categoryId: 1 },
    ]

    this.dateNow = new Date()
  }
  ngOnChanges(): void {
    this.filterByCat()
  }
  ngOnInit(): void {
    this.prdListOfCat=this.prdList
  }
  buy(prdPrice: number, count: any) {
    this.totalPrice = +count * prdPrice
  }
  private filterByCat() {
    this.prdListOfCat = this.prdList.filter(prd => prd.categoryId == this.sentCatId)
  }
}
