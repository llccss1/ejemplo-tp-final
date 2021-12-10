import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-cards-filtered',
  templateUrl: './cards-filtered.component.html',
  styleUrls: ['./cards-filtered.component.scss']
})
export class CardsFilteredComponent implements OnInit {

  movies: any[] = []

  constructor(private heroesSrv: HeroesService) {
    //this.movies = this.heroesSrv.filtered;
    //console.log(this.movies);    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.movies = this.heroesSrv.filtered;
    }, 100);
  } 

  navigate() {
    console.log('click');
  }
}