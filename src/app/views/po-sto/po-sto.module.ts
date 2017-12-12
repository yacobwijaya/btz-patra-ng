import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { PoStoComponent } from './po-sto.component';
import { PoStoRoutingModule } from './po-sto-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PoStoRoutingModule,
    ChartsModule
  ],
  declarations: [ PoStoComponent ]
})
export class PoStoModule { }
