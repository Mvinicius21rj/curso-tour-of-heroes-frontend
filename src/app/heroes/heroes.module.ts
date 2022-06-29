import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDatailComponent } from './components/hero-datail/hero-datail.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';




@NgModule({
  declarations: [HeroesComponent, HeroDatailComponent],
  imports: [
    CommonModule, FormsModule, MaterialModule, HeroesRoutingModule
  ]
})
export class HeroesModule { }
