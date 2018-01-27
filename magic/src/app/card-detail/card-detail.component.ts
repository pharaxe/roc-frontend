import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';

import { Card }         from '../card';
import { CardService }  from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: [ './card-detail.component.css' ]
})
export class CardDetailComponent implements OnInit {
  @Input() card: Card;
  @Input() testMessage: string;

  constructor(
     //private route: ActivatedRoute,
    private CardService: CardService,
     //private location: Location
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = 1;

   console.log("card id is: " + id);
    this.CardService.getCard(id)
      .subscribe(card => this.card = card);
  }

}
