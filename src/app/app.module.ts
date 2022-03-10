import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CarouselPauseComponent } from './components/carousel-pause/carousel-pause.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DaiquiriCupComponent } from './components/daiquiri-cup/daiquiri-cup.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselPauseComponent,
    DaiquiriCupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
