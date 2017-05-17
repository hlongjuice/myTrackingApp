import { Component ,ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PackagePage } from '../pages/package/package';
import { Http} from '@angular/http';
import { HomePage } from "../pages/home/home";

import { NavController, MenuController } from "ionic-angular";
import { TabsPage } from "../pages/tabs/tabs";
import { PackagesPage } from "../pages/packages/packages";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  packagesPage=PackagesPage;
  packagePage=PackagePage;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    http:Http,
    private menuCtrl:MenuController,
    ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
   onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

