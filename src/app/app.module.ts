import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';
import { VerifyPage } from '../pages/verify/verify';
import { Firebase } from '@ionic-native/firebase';
import { IonicStorageModule } from '@ionic/storage';
import {MenuPage} from "../pages/menu/menu";
import { TabsPage } from '../pages/tabs/tabs';




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
    RegisterPage,
    LoginPage,
    VerifyPage,
    MenuPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    LoginPage,
    VerifyPage,
    MenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
