import { Component, Input } from '@angular/core';

@Component ({
    selector: 'hc-widget-progress-alpha',
    template: `
        <i class="fa fa-clock-o"></i><span>{{percentage}}</span>
    `,
    styles: [`
        .fa {
            margin-right: 0.5rem;
        }
    `],
    inputs: [
        // 'label', 
        'percentage'
        // 'caption'
    ]
})
export class HcWidgetProgressAlphaComponent {
    // @Input() label: String;
    @Input() percentage: Number;
    // @Input() caption: String;
}