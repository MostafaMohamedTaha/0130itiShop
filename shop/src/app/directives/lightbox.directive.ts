import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {
  @Input() defaultColor:string='blue'
  @Input() hoverColor:string='green'
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  }
  @HostListener('mouseover') onMouseOver(){
    this.elRef.nativeElement.style.border=`2px solid ${this.hoverColor}`
  }
  @HostListener('mouseout') onMouseOut(){
    this.elRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  }
}
