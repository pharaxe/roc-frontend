import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-arena-grid',
   templateUrl: './arena-grid.component.html',
   styleUrls: ['./arena-grid.component.css']
})
export class ArenaGridComponent implements OnInit {
   @ViewChild('scrollMe') private myScroll: ElementRef;

   constructor() { }

   ngOnInit() {

   }

   ngAfterViewChecked() {
      this.scrollToBottom();
   }

   scrollToBottom(): void {
      try {
         this.myScroll.nativeElement.scrollTop = this.myScroll.nativeElement.scrollHeight;
      } catch(err) {console.log(err) }
   }
}
