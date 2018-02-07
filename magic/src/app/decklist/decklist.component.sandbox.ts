import {sandboxOf} from 'angular-playground';
import {DecklistComponent} from './decklist.component';
import {DecklistItemComponent} from '../decklist-item/decklist-item.component';

import { Card }         from '../card';
import { CardService }  from '../card.service';
import { ArenaService }  from '../arena.service';

import { MockDecklistService } from './mock.decklist.service';
import { MockCardService } from '../card-detail/mock.card.service';

const sandboxConfig = {
   providers: [
   { provide: ArenaService, useClass: MockDecklistService },
   { provide: CardService, useClass: MockCardService },
   ],
   declarations: [
      DecklistItemComponent,
   ],
   label: 'Decklist'
}; 

export default sandboxOf(DecklistComponent, sandboxConfig)
   .add('Fireballs', {
      template: `<app-decklist></app-decklist>`
   });
