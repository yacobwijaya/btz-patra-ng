import { Component, Input } from '@angular/core';

@Component({
    selector: 'hc-sap-indicator',
    template: `
        <div style="display: inline-block; position: relative">
            <img [src]="sapLogo" class="sap-logo">
            <div class="indicator" [class.indicator--online]="isOnline"></div>
        </div>
    `,
    styles: [`
        .indicator {
            height: 8px;
            width: 8px;
            border-radius: 4px;
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateY(-50%);
            background-color: red;
        }
        .indicator--online {
            background-color: green !important;
        }
        .sap-logo {
            height: 24px;
            width: auto;
        }
    `],
    inputs: ['isOnline']
})
export class HcSapIndicatorComponent {
    @Input() isOnline: boolean;
    private sapLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/SAP-Logo.svg/1486px-SAP-Logo.svg.png';
}