import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';
import { EmployeeInterface } from '../../shared-module/interfaces/employee-interface';
import { EmployeeServiceService } from '../../shared-module/services/employee-service.service';
import { error } from 'console';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent implements OnInit {

  employees:any[]=[];
  filtered_employees:any[]=[];
  keyword:string="";
  sort:string="";
  constructor(
    private employee_service:EmployeeServiceService
  ){

  }
  ngOnInit(): void {
    this.employee_service.getEmployees().subscribe({
      next:(data)=>{
        this.employees=data; console.log(this.employees)
        this.CalculateTotalTimeWorked(this.employees);
        this.FilterSort();

      },
      error:(error)=>{console.log(error)}
    })
  }
  CalculateTotalTimeWorked(array:EmployeeInterface[]){
    array.forEach(employee=>{
      const startTime = new Date(employee.StarTimeUtc).getTime()
      const endTime= new Date(employee.EndTimeUtc).getTime();
      const total_hours= Math.ceil((endTime-startTime)/ (1000 * 60 * 60));
      employee.totalWorkedHour=total_hours;
    })
  }
  FilterSort(){
    
    this.employee_service.getEmployees().subscribe({
      next:(data)=>{this.filtered_employees=data
        this.CalculateTotalTimeWorked(this.filtered_employees);
      }
    })
    console.log(this.filtered_employees);
    if(this.keyword!=""&& this.keyword.length>2){
      console.log("usao prvi if");
     
     
      this.filtered_employees=this.filtered_employees.filter(element=>element.EmployeeName?.toLowerCase().includes(this.keyword.toLowerCase()))
    }
     if(this.sort!=""){
        if(this.sort=="asc") this.filtered_employees=this.filtered_employees.sort((a,b)=>a.totalWorkedHour-b.totalWorkedHour);
        else this.filtered_employees=this.filtered_employees.sort((a,b)=>b.totalWorkedHour-a.totalWorkedHour);
      
      console.log("usao drugi if sort");
    }
    this.employees=this.filtered_employees;
    this.CalculateTotalTimeWorked(this.employees);
  }
  searchByKeyword(text_value:string){
    console.log(text_value);
    this.keyword=text_value
    this.FilterSort()
  }
  SortByTotalWorked(text_value:string){
    this.sort=text_value;
    this.FilterSort();
  }
}
