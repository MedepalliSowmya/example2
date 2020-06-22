import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private us : UserService, router : Router)
  {
  if(us.loggedIn == false)
  {
    router.navigate([''])
  }
}
  canActivate(
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("from auth guard loggedIn:"+this.us.loggedIn)
     return this.us.loggedIn;
  }
  
}
