import { Component, OnInit, Input } from '@angular/core';
import { DaiquiriListService } from '../../shared/services/daiquiri-list.service';
import { trigger, transition, state, animate, style, useAnimation, } from '@angular/animations';

@Component({
  selector: 'app-daiquiri-list',
  templateUrl: './daiquiri-list.component.html',
  styleUrls: ['./daiquiri-list.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '90vh',
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
      })),
      state('closed', style({
        height: '0vh',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ]
  
})
export class DaiquiriListComponent implements OnInit {

  daiquiriList: any = [];
  ddStatus: string = "ddClosed";
  ddStyling: boolean = false;
  // @Input() contentHeight!: number;
  @Input() isOpen!: boolean;

  constructor(private daiquiriListService: DaiquiriListService) {}


  ngOnInit(): void {
    this.getGetDaiquiriList();
  }

  getGetDaiquiriList(){
    this.daiquiriList = this.daiquiriListService.getDaiquiriList();
  }

  dropDownClicked() {
    (!this.ddStyling) ? this.ddStyling = true : this.ddStyling = false;
    (this.ddStatus == 'ddClosed') ? this.ddStatus = 'ddOpened' : this.ddStatus = "ddClosed";
  }

  hovered(i: number): boolean {
    return this.daiquiriList[i].hover = true;
  }
}
