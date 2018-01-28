import { Component, OnInit, Input, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of }         from 'rxjs/observable/of';
import { Card }         from '../card';
import { CardService }  from '../card.service';
import { ArenaService }  from '../arena.service';
import { ArenaDirective} from './arena.directive';

import {CardDetailComponent} from '../card-detail/card-detail.component';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css'],
  entryComponents: [CardDetailComponent],
})
export class ArenaComponent implements OnInit {
   //@ViewChildren(CardDetailComponent) choices: QueryList<CardDetailComponent>;
   @ViewChild(ArenaDirective) choiceHost: ArenaDirective;
   private pack: Card[];
   public pack$: Observable<Card[]>;

   constructor(
      private resolver: ComponentFactoryResolver,
      private CardService: CardService,
      private ArenaService: ArenaService,
   )
   { }

   ngOnInit() {
      this.ArenaService.getPack()
         .subscribe(pack => this.pack = pack);

      this.pack$ = of(this.pack);
   }

   ngAfterViewInit() {
   }

   createCardComponent(card, index) {
   }

   assignCardToChoiceSlot(cardInstance, index) {
      cardInstance.observe((this.pack[index]));
   }

   onClickMe() {
      console.log('clicked');
      this.ArenaService.sendPick();
      console.log(this.pack);
   }
}
