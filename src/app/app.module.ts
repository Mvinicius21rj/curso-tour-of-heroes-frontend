import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDatailComponent } from './hero-datail/hero-datail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';

// Configuração do modulo

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDatailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule ,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
