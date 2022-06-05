import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, Subscription, take, timer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Daiquiri, daiquiriList } from 'src/app/shared/data/daiquiri-list-data';

@Component({
  selector: 'app-daiquiri-cup',
  templateUrl: './daiquiri-cup.component.html',
  styleUrls: ['./daiquiri-cup.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DaiquiriCupComponent implements OnInit {

  daiquiris: any = [
    'banana',
    'blue-dolphin',
    'bull-frog',
    'coke',
    'darker-orange-octane',
    'incredible-hulk',
    'kiwi-strawberry',
    'lighter-blue-dolphin',
    'mango',
    'orange-octane',
    'pina-colada',
    'pink-lemonade',
    'screw-driver',
    'strawberry-pina-colada',
    'strawberry',
    'sweet-tart',
    'ultimate-buzz',
    'White-Russian'
  ]

  inView: any = [];
  counter: number = 0;
  source!: Observable<number>;
  time!: Subscription;
  componentDestroyed$: Subject<boolean> = new Subject()

  daiquirisList: { str: string; status: string }[] = [
    {
      str: this.daiquiris[this.counter],
      status: 'active',
    },
  ];

  addItem() {
    this.deleteRandom();
    // this.counter++;
    this.daiquirisList.push({
      str: 'added :' + this.counter,
      status: 'active',
    });
  }

  deleteRandom() {
    this.daiquirisList.splice(0, 1);
  }

  timer(): void {
    /*
      timer takes a second argument, how often to emit subsequent values
      in this case we will emit first value after 1 second and subsequent
      values every 2 seconds after
    */
    this.source = timer(1000, 2000);
    this.source
      .pipe(take(this.daiquiris.length))
      .subscribe(val => {
        this.counter++;
        this.addItem();
        if (this.counter >= this.daiquiris.length) {
          this.counter = 0;
          this.timer();
        }
      });
  }


  constructor() {

  }

  ngOnInit(): void {
    this.timer();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.time.unsubscribe();
  }



  mouseEnter() {
    // console.log("mouse enter : " + div);
    // this.counter++;
    // this.transition();
  }

  mouseLeave() {
    //  console.log('mouse leave :' + div);
    // this.counter++;
  }

  // transition() {
  //   console.log(this.t);
  //   if (this.t % 2 == 0){
  //     this.counter++;
  //   }

  // }

}
