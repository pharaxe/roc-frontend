import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Type } from "@angular/core";
import { Subject } from 'rxjs/Subject';

import { Card } from './card';
import { Draft } from './draft';
import { Color } from './color';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import {Inject} from '@angular/core'
import {Injectable} from '@angular/core'

@Injectable()
export class ArenaService { 
   deck: Card[];
   pack: Card[];
   draft: Draft;
   private draftSubject:Subject<Draft> = new Subject<Draft>();
   private guildSubject:Subject<Color[][]> = new Subject<Color[][]>();
   private api_url = 'https://www.bensweedler.com/draft/web/app_dev.php/api'
   private random_url = '/cards/random';
   private draft_url = '/drafts';
   private player_url = '/players';
   private picks_url = '/picks';
   private pack_url = '/pack';
   private guilds_url = '/guilds';
      
   constructor(
      private http:HttpClient,
   ) { 
   
      this.draft = new Draft();
      this.deck = [];
      this.pack = [];
   }

   getPack(): Observable<Card[]> {
      return of(this.pack);
   }

   getDeck(): Observable<Card[]> {
      return of(this.deck);
   }

   getDraft(): Observable<Draft> {
      return this.draftSubject.asObservable();
   }

   getGuildChoices(): Observable<Color[][]> {
      return this.guildSubject.asObservable();
   }


   sendPick(card) { 
      this.http.put(
       this.api_url 
         + this.draft_url + '/' + this.draft.draftid 
         + this.player_url + '/' + this.draft.playerid 
         + this.picks_url + '/' +  card.id, null).subscribe(
        suc => {
           this.deck.push(card);
           this.parseCards(suc);
        },
        err => {
           // hack. make sure to update the cards on an error in case frontend and backend are out of sync.
           this.parseCards(err);
        }
      );
   }

   sendGuild(colors) {
      // TODO here
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log("sending guild choice");
      console.log(colors);
      this.http.post( this.api_url + this.draft_url, JSON.stringify(colors), options).subscribe(
        suc => {
           console.log(suc);
           this.setupDraft(suc);
        }
      );
   }

   setupDraft(json: any) {
      // TODO there's gotta be a better way to copy the json data to an object.
      let draftData = JSON.parse(json);

      let newDraft = new Draft();
      newDraft.draftid = draftData.id;
      let player = draftData.players[0];
      newDraft.playerid = player.id;
      newDraft.status = draftData.status;

      let pack:Card[] = this.copyCards(player.pack.cards);

      for (var i = 0; i < pack.length; i++) {
         this.pack[i] = pack[i]; // somehow a hard copy is needed to not trash observers of this.pack
      }
      // TODO, I think it's because I'm using of() and subscribe improperly.

      let deck:Card[] = this.copyCards(player.picks.cards);

      for (var i = 0; i < deck.length; i++) {
         this.deck[i] = deck[i];
      }

      this.draft = newDraft;
      console.log(this.draft);
      this.announceDraft();
   }

   fetchPack(): void {
      this.http
      .get<Card[]>(
         this.api_url + 
         this.draft_url + '/' + this.draft.draftid + 
         this.player_url +'/' +  this.draft.playerid + 
         this.pack_url)
       .subscribe(response => this.parseCards(response));
   }

   fetchDraft(draftid: number): void {
      this.http
      .get( this.api_url + this.draft_url + '/' + draftid)
       .subscribe(response => this.setupDraft(response));
   }

   announceDraft() {
      this.draftSubject.next(this.draft);
   }

   announceGuilds() {
      this.guildSubject.next(this.draft.guildChoices);
   }

   newDraft(): void {
      this.http
       .post( this.api_url + this.draft_url, null)
       .subscribe(response => this.setupDraft(response));
   }

   // this function making assumption on the data layout symfony provides
   // also cardData should already be parsed from JSON
   // more like "formatCards" than "copyCards"
   copyCards(cardData: any[]): Card[] {
      let cards: Card[] = [];

      for (var i = 0; i < cardData.length; i++) {
         let card = new Card(cardData[i].art.card)
         card.multiverseid = cardData[i].multiverseid;
         card.rarity = cardData[i].multiverseid;

         cards[i] = card;
      }

      return cards;
   }

   parseCards(json: any): void {
      let cardData = JSON.parse(json).cards;
      let newCards = this.copyCards(cardData);

      for (var i = 0; i < newCards.length; i++) {
         this.pack[i] = newCards[i];
      }
   }

   fetchGuildChoices() {
      this.http.get( this.api_url + this.guilds_url)
       .subscribe(response => this.copyGuildChoices(response));
   }

   copyGuildChoices(response) {
      this.draft.guildChoices = [];
      let guildData = JSON.parse(response);
      console.log(guildData);

      for (var y = 0; y < guildData.length; y++) {
         this.draft.guildChoices[y] = [];
         for (var x = 0; x < guildData[y].length; x++) {
            let card = Object.assign(new Color(), guildData[y][x]); 
            this.draft.guildChoices[y][x] = card;
            console.log(this.draft.guildChoices[y][x]);
         }
      }

      console.log(this.draft.guildChoices);
      this.announceGuilds();
   }
}

