import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Type } from "@angular/core";

import { Card } from './card';
import { Draft } from './draft';
import { Color } from './color';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Inject} from '@angular/core'
import {Injectable} from '@angular/core'

@Injectable()
export class ArenaService { 
   deck: Card[];
   pack: Card[];
   draft: Draft;
   private url = 'https://www.bensweedler.com/draft/web/app_dev.php/api/cards/random';

   constructor(
      private http:HttpClient,
   ) { 
   }

   getPack(): Observable<Card[]> {
      this.pack = [];
      this.getRandomCards();
      return of(this.pack);
   }

   getDeck(): Observable<Card[]> {
      this.deck = [];

      return of(this.deck);
   }

   sendPick(card) { 
      this.deck.push(card);
      this.getRandomCards();
   }

   sendGuild(colors) {
      console.log(colors);
   }

   getRandomCards(): void {
      this.http
        .get<Card[]>(this.url).subscribe(response => this.copyCards(response));
   }

   copyCards(newCards: Card[]): void {
      newCards.forEach((cardData, ndx) => {
         this.pack[ndx] = new Card(cardData);
      });
   }

   getGuildChoices(): Observable<Color[][]> { 
      // initialize guildchoices?
      return of(this.draft.guildChoices);
   }


}

