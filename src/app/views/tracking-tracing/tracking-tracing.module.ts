import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingTracingComponent } from './tracking-tracing.component';
import { TrackingTracingRoutingModule } from './tracking-tracing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrackingTracingRoutingModule
  ],
  declarations: [ TrackingTracingComponent ]
})
export class TrackingTracingModule { }
