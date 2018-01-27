import {sandboxOf} from 'angular-playground';
import {ArenaComponent} from './arena.component';

import { Card }         from '../card';
import {CardDetailComponent} from '../card-detail/card-detail.component';
import { CardService }  from '../card.service';
import { ArenaService }  from '../arena.service';

import { MockArenaService } from './mock.arena.service';
import { MockCardService } from '../card-detail/mock.card.service';


const sandboxConfig = {
   imports: [],
   providers: [
   { provide: ArenaService, useClass: MockArenaService },
   { provide: CardService, useClass: MockCardService },
   ],
   declarations: [
      CardDetailComponent
   ],
   label: 'Arena Component'
}; 

export default sandboxOf(ArenaComponent, sandboxConfig)
   .add('basic pack', {
      template: `<app-arena></app-arena>`
   });
