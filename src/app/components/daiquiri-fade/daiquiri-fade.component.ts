import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Daiquiri } from '../../shared/services/fade.service';


@Component({
  selector: 'app-daiquiri-fade',
  template: `
    <div class="list-container">
      <div class="list-item" *ngFor="let daq of daiquiris"
        [@simpleFadeAnimation]="'in'">
        {{ daq.name }}
      </div>
    </div>
  `,
  styleUrls: ['./daiquiri-fade.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class DaiquiriFadeComponent {
   @Input()
  daiquiris!: Daiquiri[];
}