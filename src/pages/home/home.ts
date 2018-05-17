import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { GetDataProvider } from '../../providers/get-data/get-data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public DataService:GetDataProvider) {

  }
  ionViewDidLoad(){
   // this.DataService.getlocalData();
    this.DataService.getlocalData().subscribe(res => {
      console.log(res);
    });
  }
}

