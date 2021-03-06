import { trigger, transition, state, animate, style, useAnimation, } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from "@angular/core";
import { SidebarOpenAnimationRight, SidebarCloseAnimationLeft, SidebarCloseAnimationRight, SidebarOpenAnimationLeft } from './animations';

const animationParams = {
  menuWidth: "250px",
  animationStyle: "500ms ease-in"
};
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger("sideMenuLeft", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimationLeft, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimationLeft, {
          params: {
            ...animationParams
          }
        })
      ])
    ]),
    trigger("sideMenuRight", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimationRight, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimationRight, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
    ]
})

export class NavBarComponent implements OnInit {

  @Input() daiquiriList: any;
  @Output() isOpen: boolean = true;
  @Input() animationEnd:boolean = false;
  
  constructor() { }

  

  ngOnInit(): void {
  }




}

