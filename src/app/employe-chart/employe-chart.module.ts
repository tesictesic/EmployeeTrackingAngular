import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeChartRoutingModule } from './employe-chart-routing.module';
import { ChartComponentComponent } from './chart-component/chart-component.component';


@NgModule({
  declarations: [
    ChartComponentComponent
  ],
  imports: [
    CommonModule,
    EmployeChartRoutingModule
  ]
})
export class EmployeChartModule { }
