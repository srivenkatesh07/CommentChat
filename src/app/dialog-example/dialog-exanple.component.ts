import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-exanple',
  templateUrl: './dialog-exanple.component.html',
  styleUrls: ['./dialog-exanple.component.css']
})
export class DialogExanpleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
