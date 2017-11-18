import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Card }         from '../card';

import { CardService }  from '../card.service';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardSelectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private CardService: CardService,
    private location: Location
    ) {}

  ngOnInit() {
  }

}
