import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  
  movies: any[] = []

  constructor(private heroesSrv: HeroesService) {
    this.movies = this.heroesSrv.movies;
  }

  ngOnInit(): void {} 

  actualizarMovies() {
    this.movies = this.heroesSrv.filtered
  }

  navigate() {
    console.log('click');
  }

  recibir($event: DatosHijo) {
    console.log("recibido: ", $event)
  }
}

interface DatosHijo {
  message: string,
  component: string
}
