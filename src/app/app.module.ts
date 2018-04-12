import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
import { VerifyPage } from '../pages/verify/verify';
import { Firebase } from '@ionic-native/firebase';
export const  config = {
    apiKey: "AIzaSyDYEbiulCnkVBcB8EiXEEDf6wbgAHhUCC4",
    authDomain: "diary-management.firebaseapp.com",
    databaseURL: "https://diary-management.firebaseio.com",
    projectId: "diary-management",
    storageBucket: "diary-management.appspot.com",
    messagingSenderId: "779884065996"
  };
  firebase.initializeApp(config);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    VerifyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    VerifyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
