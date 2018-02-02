import { Component, OnInit, Input, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of }         from 'rxjs/observable/of';
import { Card }         from '../card';
import { CardService }  from '../card.service';
import { ArenaService }  from '../arena.service';
import { ArenaDirective} from '../arena/arena.directive';
import { DraftableDirective} from '../draftable.directive';

import {CardDetailComponent} from '../card-detail/card-detail.component';

@Component({
  selector: 'app-booster-pack',
  templateUrl: './booster-pack.component.html',
  styleUrls: ['./booster-pack.component.css'],
  entryComponents: [CardDetailComponent]
})
export class BoosterPackComponent implements OnInit {
   @ViewChildren(CardDetailComponent) choices: QueryList<CardDetailComponent>;
   @ViewChild(ArenaDirective) choiceHost: ArenaDirective;
   private pack: Card[];
   private pack$: Observable<Card[]>;

   constructor(
      private CardService: CardService,
      private ArenaService: ArenaService,
   )
   { }

   ngOnInit() {
      //this.pack$ = this.ArenaService.getPack();
      this.ArenaService.getPack().subscribe(pack => this.pack = pack);
      /*
      this.ArenaService.getPack()
         .subscribe(pack => this.pack = pack);

      this.pack$ = of(this.pack);
       */
   }

   ngAfterViewInit() {
   }

   draftCard($event) {
      console.log($event);
      this.ArenaService.sendPick($event);
   }
}
