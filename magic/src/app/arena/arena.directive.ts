import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
   selector: '[choices-host]',
})

export class ArenaDirective {
   constructor(public viewContainerRef: ViewContainerRef) { }
}
