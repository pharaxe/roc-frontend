import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { ISubscription, Subscription } from "rxjs/Subscription";

import {ArenaService} from '../arena.service';
import {Draft} from '../draft';
import {Color} from '../color';
import {Card} from '../card';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
   selector: 'app-arena-grid',
   templateUrl: './arena-grid.component.html',
   styleUrls: ['./arena-grid.component.css'],
   providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ArenaGridComponent implements OnInit {
   @ViewChild('scrollMe') private myScroll: ElementRef;
   private draftid: number = 0;
   private playerid: number;
   private status: string = 'setup'; // setup, running, completed
   private locationSubscription: ISubscription;
   private paramSubscription: Subscription;

   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
      private ArenaService: ArenaService
   ) { 
   }


   ngOnInit() {
      this.ArenaService.getDraft().subscribe(draft => {
         if (this.status == "setup" && this.location.path() == "") {
            // starting out a draft.
            this.location.go('draft/' + draft.draftid);
         }

         this.draftid = draft.draftid;
         this.playerid = draft.playerid;
         this.status = draft.status;

         if (this.status == "completed") {
            console.log(this.status);
         }
      });

      // TODO I have much to learn about location history in angular. this isn't working quite how intended but it's close enough. The main bug is caling fetchguildchoices twice sometimes. only if back and forward buttons are used to navigate.
      this.paramSubscription = this.route.params.subscribe( params => {
         let id = this.route.snapshot.paramMap.get('id');
         if (id) {
            this.ArenaService.fetchDraft(+id);
         } else {
            this.ArenaService.fetchGuildChoices();
         }
      });

      this.locationSubscription = this.location.subscribe( data => {
         let id = this.route.snapshot.paramMap.get('id');
         if (data.url == "") {
            this.draftid = 0;
            this.ArenaService.clearDraft();
            this.status = "setup";
            this.ArenaService.fetchGuildChoices();
         }
      });
   }

   ngAfterViewChecked() {
      this.scrollToBottom();
   }

   ngOnDestroy() {
      this.paramSubscription.unsubscribe();
      this.locationSubscription.unsubscribe();
   }

   scrollToBottom(): void {
      try {
         this.myScroll.nativeElement.scrollTop = this.myScroll.nativeElement.scrollHeight;
      } catch(err) {console.log(err) }
   }
}
