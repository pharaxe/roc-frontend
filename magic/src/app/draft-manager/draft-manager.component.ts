import { Component, OnInit, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

import {ArenaService} from '../arena.service';
import {Draft} from '../draft';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-draft-manager',
  templateUrl: './draft-manager.component.html',
  styleUrls: ['./draft-manager.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class DraftManagerComponent implements OnInit {
   private draftid: number;

   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
      private ArenaService: ArenaService
   ) { 

      /*
         console.log("draft changed");
         console.log(draft);
         console.log(draft.playerid);
         /*
      });
          */


      /*
      ArenaService.draft = new Draft();
      ArenaService.draft.draftid = 2;
      ArenaService.draft.playerid = 1;
       */

      /*
      if (!id) {
         console.log('posting new draft');
         ArenaService.newDraft();
      }
       */
   }

  ngOnInit() {
     this.ArenaService.getDraft().subscribe(draft => {

       this.draftid = draft.draftid;
       this.location.replaceState('draft/' + draft.draftid);
     });

     let id = this.route.snapshot.paramMap.get('id');
     if (id) {
        this.ArenaService.fetchDraft(+id);
     } else {
        this.ArenaService.newDraft();
     }
  }
}
