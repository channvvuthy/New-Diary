import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import {HttpClient} from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {VerifyPage} from "../verify/verify";

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
  constructor(public formBuilder:FormBuilder, public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,private alertCtrl: AlertController) {
  this.formGroup=this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
  this.email=this.formGroup.controls['email'];
  this.password=this.formGroup.controls['password'];
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'The connection was an error',
      buttons: ['ok ']
    });
    alert.present();
  }
  register(user){
    if(this.formGroup.valid){
      let postData=new FormData();
      postData.append('email',user.email);
      postData.append('password',user.password);
      this.data = this.http.post("http://localhost:8000/register", postData);
      this.data.subscribe(data=>{
          if(data.success==false){
            this.message="The email has already been taken.";
          }else{
            this.navCtrl.push(VerifyPage);
          }
      },(error)=>{
        this.presentAlert();
        console.log(error);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
