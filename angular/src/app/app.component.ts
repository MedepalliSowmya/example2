import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  switch1:boolean=true;
  switch2:boolean=true;
  

  abc1()
  {
    this.switch1=!this.switch1;
  }
  abc2()
  {
    this.switch2=!this.switch2;
  }

}
