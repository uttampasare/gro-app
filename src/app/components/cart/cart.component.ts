import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Price } from 'src/app/model/price';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems:Product[];  
  public price : Price;
  constructor(private cartService: CartService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
    this.cartService.getAllItems().subscribe( result =>{
      this.cartItems = result;
    });
    this.price = this.cartService.calculatePrice();
  }

  public proceedToPay(){
    if( !this.authService.isAuthenticated() ){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['payment-details']);
    }
  }


  public onQuantityChange(){
    this.price = this.cartService.calculatePrice();
  }

  removeCart(item){
    this.cartService.removeFromCart(item);
    this.onQuantityChange();
  }
}
