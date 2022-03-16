import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

// import { Daiquiri } from '../../shared/services/fade.service';


@Component({
  selector: 'app-daiquiri-fade',
  template: `
    <img src="../../../assets/img/daiquiri/{{daiquiri}}.png" alt="Avatar" class="image">

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
   @Input() daiquiri: string = '';
   @Input() counter: number = 0;
   daiquirisList: { str: string; status: string }[] = [
    {
      str: 'added :' + 0,
      status: 'active',
    },
  ];

  addItem() {
    this.deleteRandom();
    this.counter++;
    this.daiquirisList.push({
      str: 'added :' + this.counter,
      status: 'active',
    });
  }

  deleteRandom() {
    this.daiquirisList.splice(0, 1);
  }
  // daiquiris!: Daiquiri[];
}