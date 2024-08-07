import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../shared-module/services/employee-service.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import ApexCharts from 'apexcharts'
import { EmployeeInterface } from '../../shared-module/interfaces/employee-interface';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.css'
})
export class ChartComponentComponent implements OnInit {
  employees:any[]=[];
  chartOptions: any;
  constructor(
    private employeeService:EmployeeServiceService
  ){

  }
  ngOnInit(): void {
      this.employeeService.getEmployees().subscribe({
        next:(data)=>{
          this.employees=data;
          this.CalculateTotalTimeWorked(this.employees);
          this.prepareChartOptions();
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
  prepareChartOptions() {
    const totalHoursWorked = this.employees.reduce((acc, emp) => acc + emp.totalWorkedHour, 0);
    
    // Generate dataPoints with percentage values
    const dataPoints = this.employees.slice(0,20).map(emp => ({
      name: emp.EmployeeName,
      y: (emp.totalWorkedHour / totalHoursWorked) * 100 // Calculate percentage
    }));
    console.log("Data Points for Chart:", dataPoints);
    this.chartOptions = {
      animationEnabled: true,
      theme: "dark2",
      title:{
      text: "Social Media Engagement"
      },
      data: [{
        type: "pie",
        startAngle: 45,
        indexLabel: "{name}: {y}",
        indexLabelPlacement: "inside",
        yValueFormatString: "#,###.##'%'",
        dataPoints: dataPoints
      }]
    };
  }
  

}
