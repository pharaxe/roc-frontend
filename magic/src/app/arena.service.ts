import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { CardService } from './card.service';

import {Card} from './card';

@Injectable()
export class ArenaService {
   private pack: Card[];

   constructor(private http: HttpClient, private messageService: MessageService) { 
   }

   getPack(): Observable<Card[]> {
      return null;
   }

   getCard(id: number): Observable<Card> {
    return null;
   }

   trackByFn(index, item) {
      return index;
   }

   sendPick(card): void {

   }
}
