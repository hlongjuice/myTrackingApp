import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import { PackageDetailsPage } from "../package-details/package-details";

/**
 * Generated class for the PackagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  public allPackages:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http:Http,
    private modalCtrl:ModalController
    ) {
  }

  ionViewDidLoad() {
    this.http.get('http://www.tp-garden.com/api/package').subscribe((response: Response)=>{
      this.allPackages=response.json();
      console.log(this.allPackages);
    });
  }

  onViewPackage(myPackage : any){
    const modal = this.modalCtrl.create(PackageDetailsPage,myPackage);
    modal.present();
  }

}
