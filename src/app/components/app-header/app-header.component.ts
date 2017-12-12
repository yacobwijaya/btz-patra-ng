import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: [ './app-header.component.scss' ]
})
export class AppHeaderComponent {
  // Change this to get server date.
  public serverDate = new Date();
 
  // Change this to get SAP status.
  public isOnline: boolean = true;
}
