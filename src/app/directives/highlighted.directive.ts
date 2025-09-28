import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  constructor() { }

  @HostBinding('class')
  get highlighted(){
    return 'highlighted';
  }
}
