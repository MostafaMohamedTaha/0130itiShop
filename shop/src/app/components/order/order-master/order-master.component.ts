import { ICategory } from './../../../models/icategory';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent {
  catList!:ICategory[]
  selectedCatId:number=0
  totalPrice!:number
  dateNow!: Date

  constructor(){
    this.catList = [
      { id: 1, name: 'c1' },
      { id: 2, name: 'c2' },
      { id: 3, name: 'c3' },
      { id: 4, name: 'c4' },
    ]
    this.dateNow = new Date()
  }
  //   filterByCat() {
  //   this.prdListOfCat = this.prdList.filter(prd => prd.categoryId == this.selectedCatId)
  // }
}
