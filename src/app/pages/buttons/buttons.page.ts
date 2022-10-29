import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

   favorito = false;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
  console.log('click');
    this.favorito = !this.favorito;
  }
}
