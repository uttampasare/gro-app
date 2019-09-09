import { Injectable } from '@angular/core';
import { ICartState, ADD_CART, REMOVE_CART, REMOVE_ALL_CARTS } from '../state-management/cart.action';
import { Store } from '@ngrx/store';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { Price } from '../model/price';
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

  public calculatePrice():Price{
    let p = new Price();
    p.tax = this.calculateTax();
    p.subtotal = this.calculateSubTotal();
    p.shippingCharges = this.calculateShipping();
    p.grandTotal = this.calculateGrandTotal();
    return p;
  }
  
  public calculateSubTotal(){
    let subtotal=0;
    this.getAllItems().subscribe(item => {
      item.forEach( item => {
        let itemTotal = item.cartQuantity * item.price;
        subtotal = ( subtotal + itemTotal);
      });
    }); 
    return subtotal;    
  }

  public calculateTax():number{
    return (this.calculateSubTotal() * 5)/ 100;
  }

  public calculateShipping():number{
    return 1;
  }

  public calculateGrandTotal():number{
    return ( this.calculateSubTotal() + this.calculateShipping() + this.calculateTax());
  }
  
}
