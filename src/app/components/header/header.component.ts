import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn:boolean;
  constructor(private router: Router,
              private authService:AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  public home(){
    this.router.navigate(['/categories']);
  }

  public viewCart(){
    this.router.navigate(['/view-cart']);
  }

  public login(){
    this.router.navigate(['/login']);
  }

  public logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
