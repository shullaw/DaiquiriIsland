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
        trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DaiquiriFadeComponent {
   @Input()
  daiquiris!: Daiquiri[];
}