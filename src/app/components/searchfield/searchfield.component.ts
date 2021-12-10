import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {

  search: string = "";
  clear: boolean = false;

  constructor(private heroesSrv: HeroesService) { }

  ngOnInit(): void {
  }

  filter($event:any) {
    $event.preventDefault();
    this.heroesSrv.filterHeroes(this.search.trim());    
    this.clear = true;
  }
  
  onClear() {
    this.heroesSrv.resetHeroes();
    this.clear = false;
    this.search="";
  }
}
