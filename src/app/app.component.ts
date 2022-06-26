import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Daiquiri, FadeService } from './shared/services/fade.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FadeService]
})
export class AppComponent implements AfterViewInit {
  title = 'Daiquiri Island';
  daiquiris: Daiquiri[];
  @ViewChild("main") mainComponent!: ElementRef<any>;
  animationEnd: boolean = false;
  constructor(private fadeService: FadeService) {
    this.daiquiris = fadeService.daiquiris;
  }

  ngAfterViewInit(): void {
    this.loaded();
    
  }

  loaded() {
    const animated = document.querySelector('body');
    animated?.addEventListener('animationend', () => {
      
      this.animationEnd = true;
    });

  }
}
