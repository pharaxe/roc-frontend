import { Component, OnInit, Input, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { Observable } from "rxjs/Observable";
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

   constructor(
      private resolver: ComponentFactoryResolver,
      private CardService: CardService,
      private ArenaService: ArenaService,
   )
   { }

   ngOnInit() {
      this.ArenaService.getPack()
         .subscribe(pack => this.pack = pack);
   }

   ngAfterViewInit() {
      this.pack.forEach(this.createCardComponent.bind(this));
      //(<CardDetailComponent>componentRef.instance).card = the card you want to place in there
      /*
      */
      //this.choices.forEach(this.assignCardToChoiceSlot.bind(this));
   }

   createCardComponent(card, index) {
      let componentFactory = this.resolver.resolveComponentFactory(CardDetailComponent);
      console.log(componentFactory);
      console.log(this.choiceHost);
      let viewContainerRef = this.choiceHost.viewContainerRef;
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<CardDetailComponent>componentRef.instance).observe(card);
   }

      /*
   createCardComponent() {
      const factory: ComponentFactory = this.resolver.resolveComponentFactory(CardDetailComponent);
      this.componentRef = this.container.createComponent(factory);
   }
       */

   ngOnDestroy() {
      //this.componentRef.destroy();
   }

   assignCardToChoiceSlot(cardInstance, index) {
      cardInstance.observe((this.pack[index]));
   }
}
