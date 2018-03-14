import { Component, OnInit, Input} from '@angular/core';

import { Draft }         from '../draft';

@Component({
  selector: 'app-completed-screen',
  templateUrl: './completed-screen.component.html',
  styleUrls: ['./completed-screen.component.css']
})
export class CompletedScreenComponent implements OnInit {
   @Input() public draftid: number;
   private survey_url: string = 
      "https://docs.google.com/forms/d/e/1FAIpQLSdk6W1uVcsTf6YU5GsqArmuPJ9vFlGs1CD4na7t6a8cqO21RQ/viewform?entry.1858318558=";

  constructor() { }

  ngOnInit() {
  }
}
