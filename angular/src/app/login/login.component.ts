import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg= " ";

  constructor(private router:Router,
       private us: UserService) { }

  ngOnInit(): void {
  }
  abc(event)
  {
    event.preventDefault();

    let uname=event.target.elements[0].value;
    let pwd=event.target.elements[1].value;

    if(uname==pwd)
    {
      console.log("username:"+uname);
      console.log("password:"+pwd);
      this.us.setUser(uname);
      this.us.loggedIn=true;
      this.router.navigate(['Welcome'])
    }
    else
    {
      console.log("invalid credentials")
      this.msg="sorry!invalid"
    }

    
  }
}
  


