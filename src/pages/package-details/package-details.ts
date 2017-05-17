import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the PackageDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-package-details',
  templateUrl: 'package-details.html',
})
export class PackageDetailsPage {
  packageDetails:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl : ViewController) {
  }
  ngOnInit() {
    
    
  }


  ionViewDidLoad() {
    this.packageDetails=this.navParams.data;
  }
  onClose(){
    this.viewCtrl.dismiss();
  }

}
