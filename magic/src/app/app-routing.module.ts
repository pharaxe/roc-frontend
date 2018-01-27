import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CardSelectComponent} from './card-select/card-select.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardDetailComponent} from './card-detail/card-detail.component';
import {ArenaComponent} from './arena/arena.component';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'card-select', component: CardSelectComponent },
   { path: 'detail/:id', component: CardDetailComponent },
   { path: 'arena', component: ArenaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
