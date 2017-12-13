import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodReceiveComponent } from './good-receive.component';

const routes: Routes = [
  {
    path: '',
    component: GoodReceiveComponent,
    data: {
      title: 'Good Receive'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodReceiveRoutingModule {}
