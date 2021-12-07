import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CardsComponent },
  { path: 'details', component: DetailsComponent },  
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
