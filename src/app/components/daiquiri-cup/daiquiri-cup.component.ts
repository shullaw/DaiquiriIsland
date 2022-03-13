import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-daiquiri-cup',
  templateUrl: './daiquiri-cup.component.html',
  styleUrls: ['./daiquiri-cup.component.scss'],
  animations: [
  //   trigger('fadeIn', [
  //     transition('* <=> *', [
  //       style({ opacity: 0 }),
  //       animate(2000, style({ opacity: 1 })),
  //     ]),
  //   ]),
  //   trigger('fadeOut', [
  //     transition('* <=> *', [
  //       style({ opacity: 1 }),
  //       animate(2000, style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
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
export class DaiquiriCupComponent implements OnInit {


  daiquiris: any = [
    'banana',
    'blue-dolphin',
    'bull-frog'
  ]

  inView: any = [];
  counter: number = 0;

  add() {
    if (this.counter >= this.daiquiris.length) {
      this.counter = 0;
    }
    this.inView.pop(0);
    this.inView.push(this.daiquiris[this.counter++]);
  }

  constructor() { }


  ngOnInit(): void {
    this.inView.push(this.daiquiris[this.counter]);
  }

}
