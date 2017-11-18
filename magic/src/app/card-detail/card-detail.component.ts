import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Card }         from '../card';
import { CardService }  from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: [ './card-detail.component.css' ]
})
export class CardDetailComponent implements OnInit {
  @Input() card: Card;

  constructor(
    private route: ActivatedRoute,
    private CardService: CardService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');

   console.log("card id is: " + id);
    this.CardService.getCard(id)
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
