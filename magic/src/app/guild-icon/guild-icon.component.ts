import { Input, Component, OnInit } from '@angular/core';
import { Color } from '../color';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-guild-icon',
  templateUrl: './guild-icon.component.html',
  styleUrls: ['./guild-icon.component.css']
})
export class GuildIconComponent implements OnInit {
  @Input() public colors: Color[];
  public colorCode: string;

  constructor() { }

  ngOnInit() {
     of(this.colors).subscribe(colors => this.updateColorCode(colors));
  }

  updateColorCode(colors: Color[]) {
     this.colorCode = "";
     colors.forEach(color => this.colorCode += color.symbol);
  }
}
