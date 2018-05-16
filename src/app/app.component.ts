import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import {FeedbackPage} from '../pages/feedback/feedback';
import {DisclaimerPage} from '../pages/disclaimer/disclaimer'
import {WalletPage} from '../pages/Wallet/wallet'
import {OrderhistoryPage} from '../pages/orderhistory/orderhistory'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Offers', component: ListPage },
      { title: 'Order History', component: OrderhistoryPage },
      { title: 'Map', component: ListPage },
      { title: 'Track Order', component: ListPage },
      { title: 'Wallet', component: WalletPage },
      { title: 'T&C Disclaimer', component: DisclaimerPage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'Sign Out', component: ListPage },
      { title: 'Exit', component: ListPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
