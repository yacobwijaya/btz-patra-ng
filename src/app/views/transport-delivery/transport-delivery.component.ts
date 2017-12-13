import { Component } from '@angular/core';

@Component({
  templateUrl: './transport-delivery.component.html',
  styleUrls: ['./transport-delivery.component.scss']
})
export class TransportDeliveryComponent {

  constructor() { }

  objects: Array<TransportDelivery> = [
    {
      poNo: '560093123',
      moda: 'Truck',
      vendor: 'Abadi Mitra A',
      volume: 800,
      status: 'Done',
      sla: 11,
    }
  ]

  transport: Transport = {
    vehicle: 'Truck',
    driver: 'Said',
    load: '900 Box',
    origin: 'Plumpang',
    destination: 'Kertapati',
    eta: new Date(),
    vendor: 'Abadi Mitra A',
    photoPath: 'http://www.saparch.com/public/widget/1_widget_john-doe.png'
  }
}

export class TransportDelivery {
  public poNo: String;
  public moda: String;
  public vendor: String;
  public volume: Number;
  public status: String;
  public sla: Number;
}

export class Transport {
  public vehicle: String;
  public driver: String;
  public load: String;
  public origin: String;
  public destination: String;
  public eta: Date;
  public vendor: String;
  public photoPath: String;
}