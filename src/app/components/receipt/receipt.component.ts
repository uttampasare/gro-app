import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/model/receipt';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/services/cart.service';
import { Price } from 'src/app/model/price';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  receiptInfo : Receipt;
  public price : Price;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.price = this.cartService.calculatePrice();
    
    let userInfo = new User();
    userInfo.address="A5 VANC 2001 WEST USA";
    userInfo.name="John Pit";
    
    let itemInfo = [];
    let subTotal=0;
    this.cartService.getAllItems().subscribe( item => {
      itemInfo = item;
      item.forEach( itm => {
        subTotal = (subTotal + (itm.cartQuantity * itm.price));
      });
    });
    
    this.receiptInfo = new Receipt("IN32432",new Date(),userInfo,itemInfo,"Online","REF34343",subTotal);
  }

}
