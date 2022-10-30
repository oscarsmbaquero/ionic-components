import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaDefecto: Date = new Date();
  constructor() { }

  ngOnInit() {
  }
  cambioFecha($event){
  console.log($event);
  console.log($event.detail.value);
  }
}
