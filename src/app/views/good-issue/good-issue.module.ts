import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { GoodIssueComponent } from './good-issue.component';
import { GoodIssueRoutingModule } from './good-issue-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GoodIssueRoutingModule,
    ChartsModule
  ],
  declarations: [ GoodIssueComponent ]
})
export class GoodIssueModule { }
