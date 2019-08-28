import { Injectable } from '@angular/core';
import { ICartState, ADD_CART, REMOVE_CART, REMOVE_ALL_CARTS } from '../state-management/cart.action';
import { Store } from '@ngrx/store';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items : Observable<Product>;
  constructor(private store: Store<ICartState>) { }
  

  public addToCart(item:any) {
    this.store.dispatch({
      type:ADD_CART,
      payload:<Product>item
    })
  }

  public removeFromCart(item:any) {
    this.store.dispatch({
      type:REMOVE_CART,
      payload:<Product>item
    })
  } 

  public clearCart(){
    this.store.dispatch({
      type:REMOVE_ALL_CARTS
    })
  }

  public getAllItems():Observable<Product[]>{
    return this.store.select(state => state.items);
  }
}
