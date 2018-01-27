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
      return of(fireball);
   }
}

export const fireball = {
   "name": "Fireball",
   "id": 61590,
   "multiverseid": 205223,
   "url": "http://bensweedler.com/art/205223.jpg"
}
