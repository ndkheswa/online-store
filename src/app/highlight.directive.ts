import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') anything() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  // tslint:disable-next-line:typedef
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
