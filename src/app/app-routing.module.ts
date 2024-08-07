import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/table"
  },
  {
    path:"table",
    loadChildren: () => import('./employe-table/employe-table.module').then(m => m.EmployeTableModule)
  },
  {
    path:"chart",
    loadChildren:()=>import('./employe-chart/employe-chart.module').then(m=>m.EmployeChartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
