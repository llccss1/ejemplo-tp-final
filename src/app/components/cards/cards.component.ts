import { Component, OnInit } from '@angular/core';
import { HeroesService, Movie } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  
  movies: Movie[] = [];

  constructor(private heroesSrv: HeroesService) {
    //this.movies = this.heroesSrv.movies;
    this.heroesSrv.getHeroes().subscribe((movies) => {
      console.log(movies);
      this.movies = movies;
    });
  }

  ngOnInit(): void {} 

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
