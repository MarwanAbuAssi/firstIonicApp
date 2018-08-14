import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

import {QuotesServices} from "../../app/Services/quote";
import {QuotePage} from "../quote/quote";
// import {QuotePage} from "../quote/quote"


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
private quotes :any[];
  constructor(public menuCtrl: MenuController,public viewCtrl :ViewController,public qoutesServices:QuotesServices,public modalCtrl:ModalController,public quotesSerevice :QuotesServices ,public navCtrl: NavController, public navParams: NavParams) {
  }
  presentModal(quote) {
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
  }
  ionViewWillEnter() {
    this.quotes= this.quotesSerevice.getFavoriteQoute();
  }
  onDelete(){
    this.qoutesServices.removeQuoteFromFavorite(this.navParams.data);
  }
  // onOpenMenu(){
  //   this.menuCtrl.open()
  // }
}
