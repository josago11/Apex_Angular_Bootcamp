import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.textTransform = "capitalize";
   }

}
