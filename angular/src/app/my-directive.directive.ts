import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirectiveDirective {
  
  i=0;

   constructor(element:ElementRef) {
     element.nativeElement.style.color="brown";
    }

    @HostListener('click')
    abc1()
    {
      this.i=this.i+1;
      console.log("you clicked on directive:"+this.i)
    }
    @HostListener('mouseenter')
    abc2()
    {
      this.i=this.i+1;
      console.log("you entered on directive:"+this.i)
    }


}
