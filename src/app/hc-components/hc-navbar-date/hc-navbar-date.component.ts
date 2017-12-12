import { Component, Input } from '@angular/core';

@Component ({
    selector: 'hc-navbar-date',
    template: `
        <i class="fa fa-clock-o"></i><span>{{date}}</span>
    `,
    styles: [`
        .fa {
            margin-right: 0.5rem;
        }
    `],
    inputs: ['date']
})
export class HcNavbarDateComponent {
    @Input() date: Date;
}