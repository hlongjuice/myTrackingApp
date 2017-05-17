import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,Http } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PackagesPage } from "../pages/packages/packages";
import { TabsPage } from "../pages/tabs/tabs";
import { PackageDetailsPage } from "../pages/package-details/package-details";
import {AgmCoreModule} from "angular2-google-maps/core";

@NgModule({
  declarations: [
    MyApp,
    PackagesPage,
    HomePage,
    TabsPage,
    PackageDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
      AgmCoreModule.forRoot({
      apiKey:'AIzaSyB_ri9p-CIkMHARWPnhD939z_-5SjV1Ew4'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PackagesPage,
    HomePage,
    TabsPage,
    PackageDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
