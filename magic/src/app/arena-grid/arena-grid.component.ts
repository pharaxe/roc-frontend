import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { ISubscription, Subscription } from "rxjs/Subscription";

import {ArenaService} from '../arena.service';
import {Draft} from '../draft';
import {Color} from '../color';
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
         this.draftid = draft.draftid;
         this.status = draft.status;

         if (this.location.path() == "") {
            this.location.go('draft/' + draft.draftid);
            console.log("pushing onto location");
            // determine state of draft.
         }
      });

      // TODO I have much to learn about location history in angular. this isn't working quite how inended but it's close enough. The bug is caling fetchguildchoices twice sometimes. only if back and forward buttons are used.
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
