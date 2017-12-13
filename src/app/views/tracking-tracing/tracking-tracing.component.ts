import { Component } from '@angular/core';

@Component({
  templateUrl: './tracking-tracing.component.html',
  styleUrls: ['./tracking-tracing.component.scss']
})
export class TrackingTracingComponent {

  constructor() { }

  public objects: Array<TrackingTracing> = [
    {
      date: new(Date),
      activity: 'PR-RECEIVE',
      location: 'HO',
      volume: 800,
      status: 'SAP',
      pic: 'P01'
    },
    {
      date: new(Date),
      activity: 'PO.STO-CREATED',
      location: 'HO',
      volume: 1200,
      status: 'SAP',
      pic: 'P02'
    },
    {
      date: new(Date),
      activity: 'LO.STO-CREATED',
      location: 'HO',
      volume: 650,
      status: 'WMS',
      pic: 'P01'
    },
    {
      date: new(Date),
      activity: 'GI.DOC-CREATED',
      location: 'PLUMPANG',
      volume: 650,
      status: 'WMS',
      pic: 'P01'
    }
  ]
}

export class TrackingTracing {
  public date: Date;
  public activity: String;
  public location: String;
  public volume: Number;
  public status: String;
  public pic: String;
}