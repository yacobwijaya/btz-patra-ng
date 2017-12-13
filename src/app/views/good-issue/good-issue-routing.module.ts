import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodIssueComponent } from './good-issue.component';

const routes: Routes = [
  {
    path: '',
    component: GoodIssueComponent,
    data: {
      title: 'Good Issue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodIssueRoutingModule {}
