import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'danger',
      selected: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
   console.log(item);

  }
  showData(){
   console.log(this.data);

  }
}
