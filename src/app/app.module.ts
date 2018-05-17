import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import {FeedbackPage} from '../pages/feedback/feedback'
import {DisclaimerPage} from '../pages/disclaimer/disclaimer'
import {WalletPage} from '../pages/Wallet/wallet'
import {OrderhistoryPage} from '../pages/orderhistory/orderhistory'

@NgModule({
  declarations: [
    MyApp,
   FeedbackPage,
   DisclaimerPage,
   WalletPage,
   OrderhistoryPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedbackPage,
    DisclaimerPage,
    WalletPage,
   OrderhistoryPage,
    LoginPage,
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
