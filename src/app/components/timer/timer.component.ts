import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  time: number = 0;
  interval: any;
  subscribeTimer: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.time + val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.time < Infinity) {
        this.time++;
      } else {
        this.time = 0;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getTime() {
    // console.log("From timer: " + this.time);
    return this.time;
  }
}
