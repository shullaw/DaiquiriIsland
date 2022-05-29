import { Component } from '@angular/core';
import { Daiquiri, FadeService } from './shared/services/fade.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FadeService]
})
export class AppComponent {
  title = 'Daiquiri Island';
  daiquiris: Daiquiri[];

  constructor(private fadeService: FadeService) {
    this.daiquiris = fadeService.daiquiris;
  }
}

