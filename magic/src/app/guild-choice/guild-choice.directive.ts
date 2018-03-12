import { Input, Output, HostListener, HostBinding, Directive, EventEmitter, ElementRef } from '@angular/core';

import {Color} from '../color';

import {ArenaService} from '../arena.service';

@Directive({
  selector: '[appGuildChoice]'
})
export class GuildChoiceDirective {
   constructor(private arenaService:ArenaService) {
      console.log('here');
   }

   @Input() colors: Color[];

   @HostListener('click', ['$event'])
   clicked() {
      this.arenaService.sendGuild(this.colors);
      console.log('here');
   }
}

