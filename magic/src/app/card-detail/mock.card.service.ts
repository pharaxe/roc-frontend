import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Type } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Card } from '../card';

export class MockCardService { 
   getCards(): Observable<Card[]> {
      return null;
   }

   getCard(id: number): Observable<Card> {
      console.log(id);
      console.log(cards[id]);
      return of(cards[id]);
   }
}

export const cards = {
   205223:   {
      "name": "Fireball",
      "id": 61590,
      "multiverseid": 205223,
      "url": "http://bensweedler.com/art/205223.jpg"
   },
   83731: {
      "id": 64723,
      "multiverseid": 83731,
      "name": "Watery Grave",
      "url": "http://bensweedler.com/art/83731.jpg"
   },
   382374: {
		"id": 65622,
		"multiverseid": 382374,
		"name": "Squirrel Nest",
		"url": "http://bensweedler.com/art/382374.jpg"
   }
};
