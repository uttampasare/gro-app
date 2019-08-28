import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(username:string, password:string){
    //login
    localStorage.setItem('currentUser', JSON.stringify({'user':username}));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(){
    return !!localStorage.getItem('currentUser');
  }
}
