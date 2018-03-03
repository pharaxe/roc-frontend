import {sandboxOf} from 'angular-playground';

import {ManaCostComponent} from './mana-cost.component';

import { Card }         from '../card';


const sandboxConfig = {
   imports: [],
   providers: [
   ],
   label: 'Mana Cost',
}; 


export default sandboxOf(ManaCostComponent, sandboxConfig)
   .add('mana cost', {
      template: `<app-mana-cost></app-mana-cost>`
   });
