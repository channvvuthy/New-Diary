import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

export interface PageInterface{
  title:string;
  pageName:string;
  tabComponent?:any;
  index?:number;
  icon:string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
rootPage='TabPage';
@ViewChild(Nav) nav:Nav;
pages:PageInterface[]=[
  {title:'Tab 1',pageName:'TabPage',tabComponent:'Tab1Page',index:0,icon:'home'},
  {title:'Tab 2',pageName:'TabPage',tabComponent:'Tab2Page',index:1,icon:'contacts'}
]
  constructor(public navCtrl: NavController) {
console.log(this.pages);
  }
  openPage(page:PageInterface){

  }
  isActive(page:PageInterface){

  }

}
