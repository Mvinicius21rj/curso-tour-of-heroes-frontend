import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  // Colocando o HTMl diretamente no component.ts
  template:`
    <mat-card>
      <mat-card-title>404: Page not Found</mat-card-title>
      <mat-card-content>
        we couldn't find that page! Not even with x-ray vision.
      </mat-card-content> 
      <mat-card-actions>
        <button mat-raised-button calor="primary" routerLink="/">
          Take Me Home
        </button>
      </mat-card-actions>       
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;

      }        
    `
  ]
 
})
export class PageNotFoundComponent {
}
