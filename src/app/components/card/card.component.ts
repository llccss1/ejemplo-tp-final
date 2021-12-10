import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('movieIn') movie: any = {};
  @Input('index') i: number = 0;
  @Output('enviardatos') enviar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigate() { 
    console.log('click')
  }

  avisarleAlPapa() {
    console.log('click hijo');
    this.enviar.emit({message: 'Mensaje al padre desde el hijo', component: "CardComponent"});
  }

}
