import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Type } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Card } from '../card';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Inject} from '@angular/core'
import {Injectable} from '@angular/core'

@Injectable()
export class MockRandomBoosterPackService { 
   pack: Card[];

   constructor(http:HttpClient) { 
   }

   getPack(): Observable<Card[]> {
      this.pack = [];

      return of(this.pack);
   }

   getCard(id: number): Observable<Card> {
      return null;
   }

   sendPick(card) {

   }
}
