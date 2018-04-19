import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { MenuPage } from '../menu/menu';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formGroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  message:string="";
  data:Observable<any>;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,private http:HttpClient,private alertCtrl: AlertController) {
    this.formGroup=this.formBuilder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    });
    this.email=this.formGroup.controls['email'];
    this.password=this.formGroup.controls['password'];
  }
  presentAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Message',
      subTitle: message,
      buttons: ['ok ']
    });
    alert.present();
  }
  login(user){
    if(this.formGroup.valid){
      let postData=new FormData();
      postData.append('email',user.email);
      postData.append('password',user.password);
      this.data=this.http.post("http://localhost:8000/login",postData);
      this.data.subscribe((data)=>{
        this.storage.set('token',data.token);
        this.navCtrl.setRoot(MenuPage);
      },(error)=>{
        this.presentAlert(error.error.error);
      });
    }
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }


}
