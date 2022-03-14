import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daiquiri-cup',
  templateUrl: './daiquiri-cup.component.html',
  styleUrls: ['./daiquiri-cup.component.scss']
})
export class DaiquiriCupComponent implements OnInit {

  daiquiris: any = [
    'banana',
    'blue-dolphin',
    'bull-frog',
    'coke',
    'darker-orange-octane',
    'incredible-hulk',
    'kiwi-strawberry',
    'lighter-blue-dolphin',
    'mango',
    'orange-octane',
    'pina-colada',
    'pink-lemonade',
    'screw-driver',
    'strawberry-pina-colada',
    'strawberry',
    'sweet-tart',
    'ultimate-buzz',
    'White-Russian'
  ]

  inView: any = [];
  counter: number = 0;

  mouseEnter(){
    // console.log("mouse enter : " + div);
    this.counter++;
 }

 mouseLeave(){
  //  console.log('mouse leave :' + div);
  // this.counter++;
 }


  constructor() { 
    
  }


  ngOnInit(): void {
    
  }

}
