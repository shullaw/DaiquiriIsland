import { Component, OnInit, Input, ViewChild, AfterViewInit, ContentChildren, QueryList, TemplateRef, Output, EventEmitter } from '@angular/core';
import { DaiquiriListService } from '../../shared/services/daiquiri-list.service';
import { trigger, transition, state, animate, style, useAnimation, } from '@angular/animations';
import { DropSidebarOpenAnimation, DropSidebarCloseAnimation, DropDownAnimation, SidebarOpenAnimation, SidebarCloseAnimation } from './animations';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Daiquiri } from 'src/app/shared/data/daiquiri-list-data';
import { timingSafeEqual } from 'crypto';

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

      ]),
      trigger('simpleFadeDrop', [

        // the "in" style determines the "resting" state of the element when it is visible.
        state('open', style({ 
          opacity: 1,
          'transform': 'translate(0,0%)' })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
          style({ 
            'opacity': '0', 
            'transform': 'translate(0,-50%)' }),
          animate(1000)
        ]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
          animate(100, style({ 
            opacity: 0,
            'transform': 'translate(0,-50%)' })))

      ]),
    ]
})



export class DaiquiriListComponent implements OnInit, AfterViewInit {

  daiquiriList: Daiquiri[] = [];
  backgrounds: string[] = [];
  currentColor!: string;
  height!: number;
  end!: number;
  overflow!: string;
  ddactive: string = "ddClosed";
  ddStyling: boolean = false;
  // @Input() contentHeight!: number;
  @Input() isOpen!: boolean;
  @ViewChild('scrollViewport') cdkVirtualScrollViewport: any;
  active: number = -1;


  constructor(public daiquiriListService: DaiquiriListService) { }


  ngOnInit(): void {
    this.getGetDaiquiriList();
    
    this.active = -1;
    this.daiquiriList.forEach((daq: Daiquiri) => {
      daq.background = this.colorGenerator(daq.color);
    });

  }

  activate(i: number) {
    if (this.daiquiriListService.initClick === false) {
      this.daiquiriListService.initClick = true;
      
    }
    let active = this.daiquiriList[i].active;
    let collapsed = this.daiquiriList[i].collapsed;
    this.daiquiriList.forEach((daiquiri) => {
      daiquiri.active = false;
      daiquiri.collapsed = true;
    });
    this.daiquiriList[i].active=!active;
    this.daiquiriList[i].collapsed=!collapsed;
  }

  ngAfterViewInit(): void {
    
    

  }

  getGetDaiquiriList() {
    this.daiquiriListService.getDaiquiriList().subscribe((list) => {
      this.daiquiriList = list;
    });
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
      
      return itemHeight * numberOfItems;
    }
    return itemHeight * visibleItems;
  }

  nextBatch(currIndex: number, items: any[]) {
    const start = this.cdkVirtualScrollViewport.getRenderedRange().start;
    this.end = this.cdkVirtualScrollViewport.getRenderedRange().end;
    const total = this.cdkVirtualScrollViewport.getDataLength();
  }

  onClick(any: any) {
    
  }

  colorGenerator(color: string): string {
    // color.split(',');
    let newColor = color.replace('rgb(', '').split(',');
    let r = parseInt(newColor[0]);
    let g = parseInt(newColor[1]);
    let b = parseInt(newColor[2]);
    let compliment = 'rgba(' + (255 - r + 85).toString() + ', ' + (255 - g).toString() + ', ' + (255 - b + 85).toString() + ',.8)';
    return compliment;
  }

}
