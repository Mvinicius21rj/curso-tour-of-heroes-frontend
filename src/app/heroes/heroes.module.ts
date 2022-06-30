import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDatailComponent } from './components/hero-datail/hero-datail.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [HeroesComponent, HeroDatailComponent],
  imports: [
    CommonModule, FlexLayoutModule, FormsModule, MaterialModule, HeroesRoutingModule
  ]
})
export class HeroesModule { }
