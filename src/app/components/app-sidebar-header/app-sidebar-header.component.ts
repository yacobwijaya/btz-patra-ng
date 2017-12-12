import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './app-sidebar-header.component.html',
  styleUrls: [
    './app-sidebar-header.component.scss'
  ]
})

export class AppSidebarHeaderComponent {
  public profile: Profile = {
    photoPath: 'http://www.saparch.com/public/widget/1_widget_john-doe.png',
    name: 'Adrian D. Pantulu',
    title: 'Delivery Manager SR2'
  }
}

// Object: Profile
export class Profile {
  public photoPath: string;
  public name: string;
  public title: string;
}