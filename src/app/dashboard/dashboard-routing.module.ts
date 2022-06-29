import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  //forChild para ser um modulo filho do app-routing

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
