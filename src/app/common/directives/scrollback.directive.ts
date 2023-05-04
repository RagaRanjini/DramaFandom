import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollback]'
})
export class ScrollbackDirective {

  @Input() scrollback:any;
  constructor(private el:ElementRef) {}

   @HostListener("click") 
   onClick():void{
       
       let temp=this.el.nativeElement.parentNode;
       console.log(temp);
        temp=temp.children[3];
       temp.scrollTo({ left: (temp.scrollLeft - this.scrollback), behavior: 'smooth' });
       
       console.log(temp);
       console.log();
   }
  

}
