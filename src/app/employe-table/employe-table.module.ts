import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeTableRoutingModule } from './employe-table-routing.module';
import { TableComponentComponent } from './table-component/table-component.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    TableComponentComponent
  ],
  imports: [
    CommonModule,
    EmployeTableRoutingModule,
    SharedModuleModule
  ]
})
export class EmployeTableModule { }
