import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingTracingComponent } from './tracking-tracing.component';

const routes: Routes = [
  {
    path: '',
    component: TrackingTracingComponent,
    data: {
      title: 'Tracking & Tracing'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingTracingRoutingModule {}
