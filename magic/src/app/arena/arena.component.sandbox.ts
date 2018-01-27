import {sandboxOf} from 'angular-playground';
import {ArenaComponent} from './arena.component';

import { Card }         from '../card';
import { CardService }  from '../card.service';
import { ArenaService }  from '../arena.service';

import { MockArenaService } from './mock.arena.service';
//import { MockActivatedRoute, getActivatedRouteWithParent } from './mock.card.service';

const sandboxConfig = {
   imports: [],
   providers: [
   { provide: ArenaService, useClass: MockArenaService }
   ],
   label: 'Arena Component'
}; 

export default sandboxOf(ArenaComponent, sandboxConfig)
   .add('basic pack', {
      template: `<app-arena></app-arena>`
   });
