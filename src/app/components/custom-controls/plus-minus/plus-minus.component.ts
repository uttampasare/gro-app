import { Component, OnInit, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/model/product';
import { EventEmitter } from 'events';

@Component({
  selector: 'item-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.scss']
})
export class PlusMinusComponent implements OnInit {

  @Input() item : Product;

  constructor(private cartService : CartService) { }

  ngOnInit() {
    if( !this.item.cartQuantity){
        this.item.cartQuantity =1;
    }
  }

  increment(){
    this.item.cartQuantity++;
  }

  decrement(){
    if( this.item.cartQuantity == 1){
      return;
    }
    this.item.cartQuantity--;
  }

  
  
  addToCart(item){
    item.isAddedToCart=true;
    this.cartService.addToCart(item);
  }

  removeFromCart(item){
    item.isAddedToCart=false;
    this.cartService.removeFromCart(item);
  }

}
