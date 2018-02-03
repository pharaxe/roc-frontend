import {sandboxOf} from 'angular-playground';
import {DecklistItemComponent} from './decklist-item.component';

import { Card }         from '../card';
import { CardService }  from '../card.service';

import { MockCardService } from '../card-detail/mock.card.service';

const sandboxConfig = {
   imports: [],
   providers: [
   { provide: CardService, useClass: MockCardService },
   ],
   label: 'Decklist-Item Component',
}; 


export default sandboxOf(DecklistItemComponent, sandboxConfig)
   .add('with fireball', {
      template: `<app-decklist-item [id]="205223"></app-decklist-item>`
   });
