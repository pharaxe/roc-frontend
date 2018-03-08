import { Input, Component, OnInit } from '@angular/core';
import { Color } from '../color';

@Component({
  selector: 'app-guild-icon',
  templateUrl: './guild-icon.component.html',
  styleUrls: ['./guild-icon.component.css']
})
export class GuildIconComponent implements OnInit {
  @Input public colors: Color[];
  private colorCode: string;

  constructor() { }

  ngOnInit() {
     of(colors).subscribe(colors => 
        this.colorCode = "";
        colors.forEach(function(color) {
           this.colorCode += color.symbol;
        }
      )
  }
}
