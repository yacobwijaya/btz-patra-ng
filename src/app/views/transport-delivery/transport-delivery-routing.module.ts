import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportDeliveryComponent } from './transport-delivery.component';

const routes: Routes = [
  {
    path: '',
    component: TransportDeliveryComponent,
    data: {
      title: 'Transport & Delivery'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportDeliveryRoutingModule {}
