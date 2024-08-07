import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeChartRoutingModule } from './employe-chart-routing.module';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { ChartModule } from 'primeng/chart';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    ChartComponentComponent
  ],
  imports: [
    CommonModule,
    EmployeChartRoutingModule,
    ChartModule,
    CanvasJSAngularChartsModule
  ]
})
export class EmployeChartModule { }
