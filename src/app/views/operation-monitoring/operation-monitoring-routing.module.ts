import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationMonitoringComponent } from './operation-monitoring.component';

const routes: Routes = [
  {
    path: '',
    component: OperationMonitoringComponent,
    data: {
      title: 'Operation Monitoring'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationMonitoringRoutingModule {}
