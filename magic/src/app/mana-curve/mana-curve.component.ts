import { Component, OnInit } from '@angular/core';

import { Card }         from '../card';
import { ArenaService }  from '../arena.service';

@Component({
  selector: 'app-mana-curve',
  templateUrl: './mana-curve.component.html',
  styleUrls: ['./mana-curve.component.css']
})
export class ManaCurveComponent implements OnInit {
   curve: number[];

   constructor (private ArenaService:ArenaService) { }

   ngOnInit() {
      this.ArenaService.getDeck().subscribe(deck => this.updateCurve(deck));

   }

   updateCurve(deck:Card[]) {
      console.log('updating curve');
   }
}
