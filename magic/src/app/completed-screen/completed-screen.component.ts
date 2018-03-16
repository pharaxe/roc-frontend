import { Component, OnInit, Input} from '@angular/core';
import { Draft }         from '../draft';
import { Card }         from '../card';
import { ArenaService }         from '../arena.service';

@Component({
   selector: 'app-completed-screen',
   templateUrl: './completed-screen.component.html',
   styleUrls: ['./completed-screen.component.css']
})
export class CompletedScreenComponent implements OnInit {
   @Input() public draft: Draft;
   private deck:Card[];
   private survey_url: string = 
      "https://docs.google.com/forms/d/e/1FAIpQLSdk6W1uVcsTf6YU5GsqArmuPJ9vFlGs1CD4na7t6a8cqO21RQ/viewform?entry.1858318558=";
   private print_url: string = "http://www.mtgpress.net/build?url=";


   constructor(
      private ArenaService: ArenaService,
   ) { }


   ngOnInit() {
      this.ArenaService.getDeck().subscribe((deck) => {
         this.deck = deck;
      });
   }

   getPrintUrl() {

      return this.print_url + this.ArenaService.api_url +
         this.ArenaService.draft_url + "/" + this.draft.draftid +
         this.ArenaService.player_url + "/" + this.draft.playerid + 
         this.ArenaService.deck_url;
   }

   getDecklistText() {
      let txt = "";
      for (let i = 0; i < this.deck.length; i++) {
         txt += this.deck[i].name + "\n";
      }
      return txt;
   }

   copiedSuccessfully() {
      console.log('here');
   }
}
