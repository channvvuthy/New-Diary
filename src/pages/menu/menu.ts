import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = TabsPage;
  name:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public storage:Storage) {
    storage.get('token').then((token) => {
      this.http.get("http://localhost:8000/api/user/profile?token="+token+"").subscribe(data=>{
        this.name=data.user.email;
        if(data.user.photo){
          this.imgProfile=data.user.photo;
        }
      });
    });
    
  }

}
