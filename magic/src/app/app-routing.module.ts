import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SearchComponent} from './search/search.component';
import {CardSelectComponent} from './card-select/card-select.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardDetailComponent} from './card-detail/card-detail.component';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'search', component: SearchComponent },
   { path: 'card-select', component: CardSelectComponent },
   { path: 'detail/:id', component: CardDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
