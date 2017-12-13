import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguiMapModule } from '@ngui/map';

import { TransportDeliveryComponent } from './transport-delivery.component';
import { TransportDeliveryRoutingModule } from './transport-delivery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransportDeliveryRoutingModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCxmc_80eI6nR3xMA7XokZAyLoCQJf7uwk'})
  ],
  declarations: [ TransportDeliveryComponent ]
})
export class TransportDeliveryModule { }
