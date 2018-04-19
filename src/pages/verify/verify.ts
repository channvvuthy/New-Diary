import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { LoginPage } from '../login/login';

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
  formGroup:FormGroup;
  code:AbstractControl;
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,private http:HttpClient,private alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  this.formGroup=this.formBuilder.group({
    code:['',Validators.required]
  });
  this.code=this.formGroup.controls['code'];
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Message',
      subTitle: 'Verification code is invalid.',
      buttons: ['ok ']
    });
    alert.present();
  }

  verify(user){
    if(this.formGroup.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.data=this.http.get("http://localhost:8000/user/verify/"+user.code);
      this.data.subscribe((data)=>{
        if(data.success==true){
          loading.dismiss();
          this.navCtrl.push(LoginPage);
        }else{
          loading.dismiss();
          this.presentAlert();
        }
      },(error)=>{
          console.error(error);
      });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }

}
