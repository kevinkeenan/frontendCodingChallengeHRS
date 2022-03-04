import { Directive, ElementRef, HostListener } from '@angular/core';
import {AppComponent} from './app.component';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  constructor(private ele: ElementRef, private ac: AppComponent) { }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.ele.nativeElement.style.color = 'black';
  }
  @HostListener('mouseenter') onMouseEnter()
  {
    this.ele.nativeElement.style.cursor = "pointer";
    this.ele.nativeElement.style.color = 'blue';
  }

}
