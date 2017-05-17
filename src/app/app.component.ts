import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PackagePage } from '../pages/package/package';
import { Http} from '@angular/http';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PackagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,http:Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
