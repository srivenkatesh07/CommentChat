import { Component } from '@angular/core';
import { LoglistService } from './loglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commentclient';
  constructor(public LoglistService:LoglistService) { }


}
