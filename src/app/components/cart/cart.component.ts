import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems:Product[];
  constructor(private cartService: CartService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
    this.cartService.getAllItems().subscribe( result =>{
      this.cartItems = result;
    });
  }

  public proceedToPay(){
    if( !this.authService.isAuthenticated() ){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['payment-details']);
    }
  }

}
