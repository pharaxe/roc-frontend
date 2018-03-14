import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import { CardService } from './card.service';
import { ArenaService } from './arena.service';

import { CardDetailComponent } from './card-detail/card-detail.component';
import { BoosterPackComponent } from './booster-pack/booster-pack.component';
import { DraftableDirective } from './draftable.directive';
import { GuildChoiceDirective } from './guild-choice/guild-choice.directive';
import { DecklistItemComponent } from './decklist-item/decklist-item.component';
import { DecklistComponent } from './decklist/decklist.component';
import { SimpleArenaComponent } from './simple-arena/simple-arena.component';
import { ManaCostComponent } from './mana-cost/mana-cost.component';
import { ArenaGridComponent } from './arena-grid/arena-grid.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GuildIconComponent } from './guild-icon/guild-icon.component';
import { GuildChoiceComponent } from './guild-choice/guild-choice.component';
import { DraftManagerComponent } from './draft-manager/draft-manager.component';
import { DecklistCountComponent } from './decklist-count/decklist-count.component';

@NgModule({
   declarations: [
      AppComponent,
      MessagesComponent,
      CardDetailComponent,
      BoosterPackComponent,
      DraftableDirective,
      GuildChoiceDirective,
      DecklistItemComponent,
      DecklistComponent,
      SimpleArenaComponent,
      ManaCostComponent,
      ArenaGridComponent,
      NavigationBarComponent,
      GuildIconComponent,
      GuildChoiceComponent,
      DraftManagerComponent,
      DecklistCountComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(AppRoutes)
   ],
   providers: [ArenaService, CardService, MessageService],
   bootstrap: [AppComponent]
})
export class AppModule { }
