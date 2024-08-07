import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ChartComponentComponent } from './chart-component/chart-component.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:ChartComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeChartRoutingModule { }
