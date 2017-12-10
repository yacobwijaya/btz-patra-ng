import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './operation-monitoring.component.html',
  styleUrls: ['./operation-monitoring.component.scss']
})
export class OperationMonitoringComponent {

  constructor() { }

  objects = [
    {
      prNo: "000-000",
      poNo: "560931823",
      poSto: 900,
      gi: 900,
      gr: 810,
      uom: "Box",
      status: "Progress",
      pic: "P01"
    },
    {
      prNo: "000-001",
      poNo: "560931824",
      poSto: 450,
      gi: 450,
      gr: 400,
      uom: "Box",
      status: "Done",
      pic: "P01"
    }
  ]

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['PR', 'STO', 'GI', 'GR'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {
      data: [65, 59, 80, 81], 
      label: 'Volume (liter)'
    }
  ];
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }

}
