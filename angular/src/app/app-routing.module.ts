import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from  './login/login.component';
import  {WelcomeComponent } from  './welcome/welcome.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },

  {
    path  : 'Welcome',
    canActivate :[AuthGuard],
     component:WelcomeComponent
  
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
