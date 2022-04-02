import { transition, trigger, useAnimation } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { SidebarOpenAnimation, SidebarCloseAnimation } from './animations';

const animationParams = {
  menuWidth: "250px",
  animationStyle: "500ms ease"
};
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger("sideMenu", [
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
    ])
  ]
})

export class NavBarComponent implements OnInit {



  constructor() { }

  

  ngOnInit(): void {

  }
}

