import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class HoursComponent implements OnInit {
  @ViewChild("content",{static:true}) content!:ElementRef;
  hours=[ // 0 is Thursday?
    ['11AM','8PM'],
    ['2PM','9PM'],
    ['2PM','9PM'],
    ['2PM','9PM'],
    ['2PM','9PM'],
    ['11AM','11PM'],
    ['11AM','11PM']
]
open!: boolean;
  openTime!: number;
  closeTime!: number;
  openTomorrow!: any;
  timeNow: Date = new Date();
  day = this.timeNow.getDay();
  hour = this.timeNow.getHours();
  minute = this.timeNow.getMinutes();
  openIn = 0;
  openTil = 0;
  modalText: string = '';
  weekday = new Array(7);
  currentDayID!: string;


  constructor(
    private modalService: NgbModal
    ) {  this.weekday[0] = "Sunday";
  this.weekday[1] = "Monday";
  this.weekday[2] = "Tuesday";
  this.weekday[3] = "Wednesday";
  this.weekday[4] = "Thursday";
  this.weekday[5] = "Friday";
  this.weekday[6] = "Saturday";}

  ngOnInit(): void {
    this.openVerticallyCentered(this.content);
    this.checkIfOpen();


  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { 
      centered: true,
      size: 'lg',
      modalDialogClass: 'dark-modal' });
  }

  checkIfOpen() {
    var now = new Date();
    let weekday = this.weekday;
    
    var checkTime = function() {
      var today = weekday[now.getDay()];
      var timeDiv = false;
      var dayOfWeek = now.getDay();
      var hour = now.getHours();
      var minutes = now.getMinutes();
      let minuteString = '';
      let open = true;
    
      //add AM or PM
      var suffix = hour >= 12 ? "PM" : "AM";
    
      // add 0 to one digit minutes
      if (minutes < 10)
        minuteString = "0" + minutes.toString();
        else minuteString = minutes.toString();
    
        let weekend = (dayOfWeek == 6 || dayOfWeek == 5);
      if ( weekend && hour >= 11 && hour <= 23) {
        hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
        timeDiv = true;
            } 
      
      else if (dayOfWeek==0 && hour >= 11 && hour <= 20) {
        hour = ((hour + 11) % 12 + 1);
        timeDiv = true;
      }
      else if (!weekend && dayOfWeek!=0 && hour >= 14 && hour <= 21) {
        hour = ((hour + 11) % 12 + 1);
        timeDiv = true;
      } 
      else {
        if (hour == 0 || hour > 12) {
          hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
        }
        timeDiv = false;
      }
      return timeDiv;
    };
    
    var currentDay = weekday[now.getDay()];
    this.currentDayID = currentDay; //gets todays weekday and turns it into id
    
    setInterval(checkTime, 1000);
    this.open = checkTime();
    this.weekday = this.weekday.slice(this.day).concat(this.weekday.slice(0, this.day));
    this.hours = this.hours.slice(this.day).concat(this.hours.slice(0, this.day));
    this.modalText = this.open ? `We're open!` : `We are closed`}
  

}
