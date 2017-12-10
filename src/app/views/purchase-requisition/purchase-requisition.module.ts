import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { PurchaseRequisitionComponent } from './purchase-requisition.component';
import { PurchaseRequisitionRoutingModule } from './purchase-requisition-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRequisitionRoutingModule,
    ChartsModule
  ],
  declarations: [ PurchaseRequisitionComponent ]
})
export class PurchaseRequisitionModule { }
