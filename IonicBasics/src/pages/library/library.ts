import {Component, OnInit} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
// import {Quote} from "../../app/Data/qupte.interface";
import quotes from "../../app/Data/quotes";
import {QuotesPage} from '../quotes/quotes';
import {SettingsPage} from "../settings/settings";
QuotesPage
/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: any;
 quotesPage=QuotesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  ngOnInit() {
    this.quoteCollection = quotes;
    console.log(quotes)
  }

  openQuote(data) {
    this.navCtrl.push(SettingsPage,{quotes:data})

  }

}
