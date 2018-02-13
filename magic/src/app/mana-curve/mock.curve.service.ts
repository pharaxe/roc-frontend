import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Type } from "@angular/core";

import { Card } from '../card';

import {Inject} from '@angular/core'
import {Injectable} from '@angular/core'

@Injectable()
export class MockCurveService { 
   deck: Card[];

   constructor() { 
      this.deck = [];
   }

   getDeck(): Observable<Card[]> {
      return of(this.deck);
   }

   addToDeck(cmc:number, amount:number) {
      for (var i = 0; i < amount; i++) {
         let card = new Card();
         card.cmc = cmc;
         this.deck.push(card);
      }
   }
}
