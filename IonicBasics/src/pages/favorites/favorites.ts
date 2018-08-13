import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';

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
  constructor(public modalCtrl:ModalController,public quotesSerevice :QuotesServices ,public navCtrl: NavController, public navParams: NavParams) {
  }
  presentModal(quote) {
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
  }
  ionViewWillEnter() {
    this.quotes= this.quotesSerevice.getFavoriteQoute();
  }

}
