import { Component, OnInit } from '@angular/core';
import { Heroe, Movie } from 'src/app/models/api-models';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  
  //movies: Heroe[] | Movie[] = [];  
  movies: Heroe[] = [];  

  constructor(private heroesSrv: HeroesService) {
    //this.movies = this.heroesSrv.movies;
    this.heroesSrv.getHeroes().subscribe((resp) => {
        console.log("Respuesta del endpoint personajes resde el componente: ", resp)
        this.movies = resp.data;
      });
    
    
    this.heroesSrv.getPeliculas().subscribe((resp: any) => {
      console.log("Respuesta del endpoint peliculas resde el componente: ", resp)
      
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
