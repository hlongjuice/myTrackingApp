import { Http ,Response } from '@angular/http';
import { Component,Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PackagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-package',
  templateUrl: 'package.html',
})
export class PackagePage {
public package : any
  
  constructor(private http:Http) {
  }

  ionViewDidLoad() {
    this.http.get('http://www.tp-garden.com/test_json').subscribe((response: Response) => {
            this.package=response.json();
             console.log(this.package);
        });
 
  }

}
