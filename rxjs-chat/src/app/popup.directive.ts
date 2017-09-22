import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
  ContentChildren,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appPopup]',
  exportAs: 'popup'
})
export class PopupDirective implements OnInit, OnChanges, AfterContentInit {
  @Input() message: string;
  @HostBinding('attr.class') cssClass = "ui message";
  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }
  @HostListener('click') displayMessage($event: Event): void {
    console.log($event);
    alert(this.message);
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

  }
}
