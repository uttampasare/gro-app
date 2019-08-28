import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private router: Router,
    private authService:AuthService) { }

  ngOnInit() {
  }

  public login(){
    if( this.username =='test' && this.password=='test'){
      this.authService.login(this.username,this.password);
      this.router.navigate(['categories']);
    }
  }

}
