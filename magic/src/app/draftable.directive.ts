import { Input, Output, HostListener, HostBinding, Directive, EventEmitter, ElementRef } from '@angular/core';

import {Card} from './card';

@Directive({
  selector: '[appDraftable]'
})
export class DraftableDirective {
   constructor(el: ElementRef) {
      //el.nativeElement.style.display = 'block';
   }

   @Input() card: Card;
   @Output() picked: EventEmitter<Card> = new EventEmitter<Card>();

   @HostBinding('style.backgroundColor') bgColor: string;

   @HostListener('click', ['$event'])
   clicked() {
      this.picked.emit(this.card);
   }
}
