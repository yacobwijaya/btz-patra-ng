import { Component } from '@angular/core';

@Component({
  templateUrl: './good-issue.component.html',
  styleUrls: ['./good-issue.component.scss']
})
export class GoodIssueComponent {

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


  // Bar Chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agt'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {
      data: [65, 59, 80, 81, 34, 56, 78, 90], 
      label: 'Volume (liter)'
    }
  ];

  // Doughnut
  public doughnutChartLabels:string[] = ['Planned', 'Progress', 'Done'];
  public doughnutChartData:number[] = [43.47, 41.46, 15.46];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true
  };
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
