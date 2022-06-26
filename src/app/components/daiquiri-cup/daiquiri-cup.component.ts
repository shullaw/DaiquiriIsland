import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take, timer } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';
import { Daiquiri } from 'src/app/shared/data/daiquiri-list-data';
import { DaiquiriListService } from 'src/app/shared/services/daiquiri-list.service';

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
        animate(1000, style({ opacity: 0 }))
      ]),
      transition('* => *', [
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DaiquiriCupComponent implements OnInit {

  daiquiris: any = [
    'White-Russian',
    'banana',
    'White-Russian',
    'strawberry-pina-colada',
    'strawberry-pina-colada',
    'strawberry-pina-colada',
    'blue-dolphin',
    'screw-driver',
    'ultimate-buzz',
    'ultimate-buzz',
    'ultimate-buzz',
    'ultimate-buzz',
    'kiwi-strawberry',
    'ultimate-buzz',
    'mango',
    'pina-colada',
    'strawberry-pina-colada',
    'pina-colada',
    'mango',
    'mango',
    'strawberry-pina-colada',
    'ultimate-buzz',
    'strawberry-pina-colada',
    'pina-colada',
    'darker-orange-octane',
    'mango',
    'strawberry-pina-colada',
    'pina-colada',
    'bull-frog',
    'mango',
    'orange-octane',
    'pina-colada',
    'lighter-blue-dolphin',
    'White-Russian',
    'strawberry-pina-colada',
    'pina-colada',
    'pink-lemonade',
    'strawberry-pina-colada',
    'screw-driver',
    'ultimate-buzz',
    'strawberry',
    'strawberry',
    'sweet-tart',
    'pink-lemonade',
    'ultimate-buzz',
    'White-Russian',
    'White-Russian',
    'White-Russian',
    'White-Russian',
    'White-Russian',
    'White-Russian',
    'coke',
    'pina-colada',
    'lighter-blue-dolphin',
    'incredible-hulk',
  ]
  daiquiriList: Daiquiri[] = [];


  @Input() animationEnd: boolean = false;
  initClick = false;
  inView: any = [];
  counter: number = 0;
  source!: Observable<number>;
  time!: Subscription;
  componentDestroyed$: Subject<boolean> = new Subject()

  
  daiquirisList: { str: string; active: string }[] = [
    {
      str: this.daiquiris[this.counter],
      active: 'active',
    },
  ];
  active = false;




  constructor(public daiquiriListService: DaiquiriListService) {

  }



  ngOnInit(): void {
    this.getGetDaiquiriList();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.time.unsubscribe();
  }

  getGetDaiquiriList() {
    this.daiquiriListService.getDaiquiriList().subscribe((list) => {
      this.daiquiriList = list;
    });
  }

  anyActive() {
    this.daiquiriList.forEach((daiquiri) => {
      daiquiri.active ? this.active=true : null;
    })
  }

  addItem() {
    this.daiquirisList.push({
      str: 'added :' + this.counter,
      active: 'active',
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
        // this.addItem();
        if (this.counter >= this.daiquiris.length) {
          this.counter = 0;
          this.timer();
        }
      });
  }

}
