import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { TripsPage } from '../pages/trips/trips';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TravelInfoPage } from '../pages/travel-info/travel-info';
import { LoginPage } from '../pages/login/login';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    TripsPage,
    LoginPage,
    TravelInfoPage
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    TripsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
