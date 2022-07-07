import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule }  from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const MODULES = [
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatExpansionModule,
  MatIconModule,
  MatToolbarModule

];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
