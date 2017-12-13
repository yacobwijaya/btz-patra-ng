import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SapInterfacingComponent } from './sap-interfacing.component';
import { SapInterfacingRoutingModule } from './sap-interfacing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SapInterfacingRoutingModule
  ],
  declarations: [ SapInterfacingComponent ]
})
export class SapInterfacingModule { }
