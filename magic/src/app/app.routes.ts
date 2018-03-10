import {Routes} from '@angular/router';
import {DraftManagerComponent} from './draft-manager/draft-manager.component';


export const AppRoutes: Routes = [
   { path: '', component: DraftManagerComponent, pathMatch: 'full' },
   { path: 'draft/:id', component: DraftManagerComponent }
];
