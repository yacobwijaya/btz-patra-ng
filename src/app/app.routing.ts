import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'operation-monitoring',
        loadChildren: './views/operation-monitoring/operation-monitoring.module#OperationMonitoringModule'
      },
      {
        path: 'purchase-requisition',
        loadChildren: './views/purchase-requisition/purchase-requisition.module#PurchaseRequisitionModule'
      },
      {
        path: 'po-sto',
        loadChildren: './views/po-sto/po-sto.module#PoStoModule'
      },
      {
        path: 'good-receive',
        loadChildren: './views/good-receive/good-receive.module#GoodReceiveModule'
      },
      {
        path: 'good-issue',
        loadChildren: './views/good-issue/good-issue.module#GoodIssueModule'
      },
      {
        path: 'transport-delivery',
        loadChildren: './views/transport-delivery/transport-delivery.module#TransportDeliveryModule'
      },
      {
        path: 'tracking-tracing',
        loadChildren: './views/tracking-tracing/tracking-tracing.module#TrackingTracingModule'
      },
      {
        path: 'sap-interfacing',
        loadChildren: './views/sap-interfacing/sap-interfacing.module#SapInterfacingModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
