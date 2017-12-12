import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoStoComponent } from './po-sto.component';

const routes: Routes = [
  {
    path: '',
    component: PoStoComponent,
    data: {
      title: 'PO STO'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoStoRoutingModule {}
