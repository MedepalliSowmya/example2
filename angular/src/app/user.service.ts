import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user="";
  loggedIn=false;

  constructor() {
    console.log("user service instiated");
    console.log("logged in:"+this.loggedIn)
   }
   public getUser()
     {
       return this.user;
     }
     public setUser(u)
     {
       this.user=u;
     }
}
