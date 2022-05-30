import { Component, OnInit, Input, ViewChild, AfterViewInit, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { DaiquiriListService } from '../../shared/services/daiquiri-list.service';
import { trigger, transition, state, animate, style, useAnimation, } from '@angular/animations';
import { DropSidebarOpenAnimation, DropSidebarCloseAnimation, DropDownAnimation, SidebarOpenAnimation, SidebarCloseAnimation } from './animations';
import { AbsoluteSourceSpan } from '@angular/compiler';

const animationParams = {
  menuWidth: "250px",
  animationStyle: "1s ease-in"
};
@Component({
  selector: 'app-daiquiri-list',
  templateUrl: './daiquiri-list.component.html',
  styleUrls: ['./daiquiri-list.component.scss'],
  animations: [
    trigger('openCloseItems', [
      // ...
      state('open', style({
        height: '44px',
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.25)',
        // textShadow: `0 0 0.05em rgba(0, 0, 0, 0.8), -0.025em 0.025em 0.1em rgba(161, 4, 179),
        // -0.05em 0.05em 0.1em rgb(255, 255, 255), -0.1em 0.1em 0.3em rgb(0, 0, 0),
        // -0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5)`,
        
      })),
      state('closed', style({
        // height: '44px',
        opacity: 0.8,
        backgroundColor: 'rgba(161, 4, 179)',
        textShadow: `0 0 0.05em rgba(0, 0, 0, 0.8), -0.025em 0.025em 0.1em rgb(0, 0, 0),
        -0.05em 0.05em 0.1em rgb(255, 255, 255), -0.1em 0.1em 0.3em rgb(0, 0, 0),
        -0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5)`
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
    trigger('openCloseContainer', [
      // ...
      state('open', style({
        height: '44px',
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
      })),
      state('closed', style({
        height: '88px',
        opacity: 0.8,
        backgroundColor: 'rgba(161, 4, 179)',
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
    trigger("sideMenuLeft", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ]),
    DropDownAnimation
  ]
  
})
export class DaiquiriListComponent implements OnInit, AfterViewInit {

  daiquiriList: any = [];
  currentColor!: string;
  height!:number;
  end!: number;
  overflow!: string;
  ddStatus: string = "ddClosed";
  ddStyling: boolean = false;
  // @Input() contentHeight!: number;
  @Input() isOpen!: boolean;
  @ViewChild('scrollViewport') cdkVirtualScrollViewport: any;

  constructor(private daiquiriListService: DaiquiriListService) {}


  ngOnInit(): void {
    this.getGetDaiquiriList();
    console.log("init: ", this.daiquiriList.length);
  }

  ngAfterViewInit(): void {
    console.log(this.calculateContainerHeight());
    console.log("after: ", this.daiquiriList.length);

  }

  getGetDaiquiriList(){
    this.daiquiriList = this.daiquiriListService.getDaiquiriList();
  }

  hovered(i: number): boolean {
    return this.daiquiriList[i].hover = true;
  }

  calculateContainerHeight(): string {
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
      return `${itemHeight * numberOfItems}px`;
    }
    return `${itemHeight * visibleItems}px`;
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

}
