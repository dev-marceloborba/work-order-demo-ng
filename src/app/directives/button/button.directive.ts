import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() color: 'primary' | 'danger' = 'primary';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setButtonStyle();
  }

  private setButtonStyle() {
    this.renderer.addClass(this.el.nativeElement, 'text-white');
    this.renderer.addClass(this.el.nativeElement, 'font-bold');
    this.renderer.addClass(this.el.nativeElement, 'py-1');
    this.renderer.addClass(this.el.nativeElement, 'px-2');
    this.renderer.addClass(this.el.nativeElement, 'mr-2');
    this.renderer.addClass(this.el.nativeElement, 'rounded');

    switch (this.color) {
      case 'primary':
        this.renderer.addClass(this.el.nativeElement, 'bg-blue-500');
        this.renderer.addClass(this.el.nativeElement, 'hover:bg-blue-700');
        break;
      case 'danger':
        this.renderer.addClass(this.el.nativeElement, 'bg-red-500');
        this.renderer.addClass(this.el.nativeElement, 'hover:bg-red-700');
        break;
      default:
        break;
    }
  }
}
