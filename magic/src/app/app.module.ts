import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { CardService } from './card.service';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { CardSelectComponent } from './card-select/card-select.component';
import { BoosterPackComponent } from './booster-pack/booster-pack.component';
import { ArenaService } from './arena.service';
import { DraftableDirective } from './draftable.directive';
import { DecklistItemComponent } from './decklist-item/decklist-item.component';

@NgModule({
   declarations: [
      AppComponent,
      MessagesComponent,
      CardDetailComponent,
      DashboardComponent,
      CardSearchComponent,
      CardSelectComponent,
      BoosterPackComponent,
      DraftableDirective,
      DecklistItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [ArenaService, CardService, MessageService],
   bootstrap: [AppComponent]
})
export class AppModule { }
