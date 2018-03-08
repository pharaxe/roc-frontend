import {sandboxOf} from 'angular-playground';
import {GuildIconComponent} from './guild-icon.component';

import {white, blue, black, red, green, Color }         from '../color';

const sandboxConfig = {
   imports: [],
   providers: [],
   label: 'Guild Icons',
}; 


export default sandboxOf(CardDetailComponent, sandboxConfig)
   .add('white blue', {
      template: `<app-guid-icon [colors]="colors"></app-guild-icon>`,
      context: {colors: [ white, blue] }
   });

