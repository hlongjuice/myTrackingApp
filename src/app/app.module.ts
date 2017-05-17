import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,Http } from '@angular/http';
import { MyApp } from './app.component';
import { PackagePage } from '../pages/package/package';
import { HomePage } from '../pages/home/home';
import { PackagesPage } from "../pages/packages/packages";
import { TabsPage } from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    PackagePage,
    PackagesPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PackagePage,
    PackagesPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
