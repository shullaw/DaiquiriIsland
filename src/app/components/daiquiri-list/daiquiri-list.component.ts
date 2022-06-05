import { Component, OnInit, Input, ViewChild, AfterViewInit, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { DaiquiriListService } from '../../shared/services/daiquiri-list.service';
import { trigger, transition, state, animate, style, useAnimation, } from '@angular/animations';
import { DropSidebarOpenAnimation, DropSidebarCloseAnimation, DropDownAnimation, SidebarOpenAnimation, SidebarCloseAnimation } from './animations';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Daiquiri } from 'src/app/shared/data/daiquiri-list-data';

const animationParams = {
  menuWidth: "250px",
  animationStyle: "1s ease-in"
};
@Component({
  selector: 'app-daiquiri-list',
  templateUrl: './daiquiri-list.component.html',
  styleUrls: ['./daiquiri-list.component.scss'],
  animations: [
    trigger('openCloseContainer', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0.8,
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
      transition('* => open', [
        animate('1s',
          style({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),

      trigger('simpleFadeAnimation', [

        // the "in" style determines the "resting" state of the element when it is visible.
        state('open', style({ opacity: 1 })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
          style({ opacity: 0 }),
          animate(1000)
        ]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
          animate(1000, style({ opacity: 0 })))

      ])
    ]
})



export class DaiquiriListComponent implements OnInit, AfterViewInit {

  daiquiriList: Daiquiri[] = [];
  backgrounds: string[] = [];
  currentColor!: string;
  height!: number;
  end!: number;
  overflow!: string;
  ddStatus: string = "ddClosed";
  ddStyling: boolean = false;
  // @Input() contentHeight!: number;
  @Input() isOpen!: boolean;
  @ViewChild('scrollViewport') cdkVirtualScrollViewport: any;
  active: number = -1;

  constructor(public daiquiriListService: DaiquiriListService) { }


  ngOnInit(): void {
    this.getGetDaiquiriList();
    console.log("init: ", this.daiquiriList);
    this.active = -1;
    this.daiquiriList.forEach((daq: Daiquiri) => {
      daq.background = this.colorGenerator(daq.color);
    });

  }

  ngAfterViewInit(): void {
    console.log(this.calculateContainerHeight());
    console.log("after: ", this.daiquiriList);

  }

  getGetDaiquiriList() {
    this.daiquiriList = this.daiquiriListService.getDaiquiriList();
  }

  hovered(i: number): boolean {
    return this.daiquiriList[i].hover = true;
  }

  calculateContainerHeight(): number {
    const numberOfItems = this.daiquiriList.length;
    // This should be the height of your item in pixels
    const itemHeight = 44;
    // The final number of items you want to keep visible
    const visibleItems = 5;
    setTimeout(() => {
      this.cdkVirtualScrollViewport.checkViewportSize();
    }, 300);
    if (numberOfItems <= visibleItems) {
      console.log(`${itemHeight * numberOfItems}`);
      return itemHeight * numberOfItems;
    }
    return itemHeight * visibleItems;
  }

  nextBatch(currIndex: number, items: any[]) {
    const start = this.cdkVirtualScrollViewport.getRenderedRange().start;
    this.end = this.cdkVirtualScrollViewport.getRenderedRange().end;
    const total = this.cdkVirtualScrollViewport.getDataLength();
    console.log(`start = ${start}\nend is ${this.end}\ntotal is ${total}`)
    // if (this.end == total) {
    //   // console.log("end reached increase page no")
    // }

  }

  onClick(any: any) {
    console.log(any);
  }

  colorGenerator(color: string): string {
    // color.split(',');
    let newColor = color.replace('rgb(', '').split(',');
    let r = parseInt(newColor[0]);
    let g = parseInt(newColor[1]);
    let b = parseInt(newColor[2]);
    let compliment = 'rgba(' + (255 - r).toString() + ', ' + (255 - g).toString() + ', ' + (255 - b).toString() + ',.8)';
    return compliment;
  }

}
