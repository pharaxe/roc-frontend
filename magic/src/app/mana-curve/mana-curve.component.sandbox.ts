import {sandboxOf} from 'angular-playground';
import {ManaCurveComponent} from './mana-curve.component';

import { ArenaService }  from '../arena.service';
import { Card }         from '../card';

import { MockCurveService } from './mock.curve.service';

const sandboxConfig = {
   providers: [
   { provide: ArenaService, useClass: MockCurveService },
   ],
   declarations: [
   ],
   label: 'Mana Curve'
}; 

export default sandboxOf(ManaCurveComponent, sandboxConfig)
   .add('Perfect Curve', {
      template: `<app-mana-curve></app-mana-curve>`
   });
