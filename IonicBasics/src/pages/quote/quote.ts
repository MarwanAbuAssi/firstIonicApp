import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {QuotesServices} from "../../app/Services/quote";

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person:string="";
  text :string=""
  constructor(public qoutesServices: QuotesServices,public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }
  onUnFavorite(){
    this.qoutesServices.removeQuoteFromFavorite(this.navParams.data)
    this.onClose();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.person= this.navParams.get("person")
    this.text= this.navParams.get("text")
  }
 onClose(){
    this.viewCtrl.dismiss();
 }
}
