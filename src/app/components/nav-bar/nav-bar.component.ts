import { transition, trigger, useAnimation } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { SidebarOpenAnimationRight, SidebarCloseAnimationLeft, SidebarCloseAnimationRight, SidebarOpenAnimationLeft } from './animations';

const animationParams = {
  menuWidth: "250px",
  animationStyle: "500ms ease"
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

  @Input() teams: any;



  constructor() { }

  

  ngOnInit(): void {

  }
}

