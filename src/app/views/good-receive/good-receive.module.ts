import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { GoodReceiveComponent } from './good-receive.component';
import { GoodReceiveRoutingModule } from './good-receive-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GoodReceiveRoutingModule,
    ChartsModule
  ],
  declarations: [ GoodReceiveComponent ]
})
export class GoodReceiveModule { }
