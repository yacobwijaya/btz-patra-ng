import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseRequisitionComponent } from './purchase-requisition.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseRequisitionComponent,
    data: {
      title: 'PUrchase Requisition'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRequisitionRoutingModule {}
