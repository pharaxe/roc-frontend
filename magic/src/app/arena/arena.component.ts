import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Card }         from '../card';
import { CardService }  from '../card.service';
import { ArenaService }  from '../arena.service';

import {CardDetailComponent} from '../card-detail/card-detail.component';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css'],
})
export class ArenaComponent implements OnInit {
  @ViewChildren(CardDetailComponent) choices: QueryList<CardDetailComponent>;
  private pack: Card[];
  

  constructor(
    private CardService: CardService,
    private ArenaService: ArenaService,
  )
  { }

  ngOnInit() {
    this.ArenaService.getPack()
      .subscribe(pack => this.pack = pack);
  }

  ngAfterViewInit() {
     this.choices.forEach(this.assignCardToChoiceSlot.bind(this));
  }

  assignCardToChoiceSlot(cardInstance, index) {
     cardInstance.observe((this.pack[index]));
  }
}
