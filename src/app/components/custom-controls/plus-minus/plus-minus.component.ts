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

  public quantity : number = 1;
  @Input() item : Product;

  constructor(private cartService : CartService) { }

  ngOnInit() {
  }

  increment(){
    this.quantity++;
  }

  decrement(){
    if( this.quantity == 1){
      return;
    }
    this.quantity--;
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
