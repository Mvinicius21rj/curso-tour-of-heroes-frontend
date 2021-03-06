import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';


// Configuração do modulo

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //@angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    // app
    AppRoutingModule,
    CoreModule ,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
