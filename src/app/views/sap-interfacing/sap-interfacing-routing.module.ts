import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SapInterfacingComponent } from './sap-interfacing.component';

const routes: Routes = [
  {
    path: '',
    component: SapInterfacingComponent,
    data: {
      title: 'SAP Interfacing'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SapInterfacingRoutingModule {}
