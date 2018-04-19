import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import {HttpClient} from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {VerifyPage} from "../verify/verify";
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  formGroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  message:string="";
  verificationId:any;
  data:Observable<any>;
  constructor(public loadingCtrl: LoadingController,public formBuilder:FormBuilder, public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,private alertCtrl: AlertController) {
  this.formGroup=this.formBuilder.group({
    email:['',Validators.email],
    password:['',Validators.required]
  });
  this.email=this.formGroup.controls['email'];
  this.password=this.formGroup.controls['password'];
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Message',
      subTitle: 'The connection was an error',
      buttons: ['ok ']
    });
    alert.present();
  }
  register(user){
    if(this.formGroup.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      let postData=new FormData();
      postData.append('email',user.email);
      postData.append('password',user.password);
      this.data = this.http.post("http://localhost:8000/register", postData);
      this.data.subscribe(data=>{
          if(data.success==false){
            loading.dismiss();
            this.message="The email has already been taken.";
          }else{
            loading.dismiss();
            this.navCtrl.push(VerifyPage);
          }
      },(error)=>{
        loading.dismiss();
        this.presentAlert();
        console.log(error);
      });
    }
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
