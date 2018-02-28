import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  storageKey: string = 'contact-manager-jwt';

  constructor(private router: Router) { }


setToken(token: string){
  localStorage.setItem(this.storageKey, token)
}
getToken(){
  return localStorage.getItem(this.storageKey)

}
isLoggedin(){
  return this.getToken() !== null;

}
logOut(){
localStorage.removeItem(this.storageKey);
this.router.navigate(['/login'])
}
}