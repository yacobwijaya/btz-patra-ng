import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { OperationMonitoringComponent } from './operation-monitoring.component';
import { OperationMonitoringRoutingModule } from './operation-monitoring-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OperationMonitoringRoutingModule,
    ChartsModule
  ],
  declarations: [ 
    OperationMonitoringComponent 
  ]
})
export class OperationMonitoringModule { }
