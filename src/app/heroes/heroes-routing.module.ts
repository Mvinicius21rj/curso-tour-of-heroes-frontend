import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDatailComponent } from './components/hero-datail/hero-datail.component';
import { HeroesComponent } from './components/heroes/heroes.component';



const routes: Routes = [
  { path: '', component: HeroesComponent},
  { path: '/:id', component: HeroDatailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
