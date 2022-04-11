import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CarouselPauseComponent } from './components/carousel-pause/carousel-pause.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DaiquiriCupComponent } from './components/daiquiri-cup/daiquiri-cup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TimerComponent } from './components/timer/timer.component'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DaiquiriListComponent } from './components/daiquiri-list/daiquiri-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselPauseComponent,
    DaiquiriCupComponent,
    NavBarComponent,
    TimerComponent,
    DaiquiriListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
