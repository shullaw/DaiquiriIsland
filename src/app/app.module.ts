import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaiquiriCupComponent } from './components/daiquiri-cup/daiquiri-cup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TimerComponent } from './components/timer/timer.component'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DaiquiriListComponent } from './components/daiquiri-list/daiquiri-list.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { DaiquiriListService } from './shared/services/daiquiri-list.service';
import { HoursComponent } from './hours/hours.component';

@NgModule({
  declarations: [
    AppComponent,
    DaiquiriCupComponent,
    NavBarComponent,
    TimerComponent,
    DaiquiriListComponent,
    HoursComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [
    ScreenTrackingService, UserTrackingService, DaiquiriListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
