import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {QuotesServices} from '../../app/Services/quote'
/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotes= this.navParams.data;
  constructor(public qouteServise: QuotesServices,
    public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.quotes)
  }
  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Add quote',
      subTitle:'Are You Sure ?',
      message: 'Are You Sure you went to add the quote?',
      buttons: [   {
        text: 'Yse Go a head',
        handler: () => {
          this.qouteServise.addQuoteToFavorite(item)
        }
      },
        {
          text: 'No i change my mind!',
          handler: () => {
            console.log('Disagree clicked');
          }
        }

      ]
    });
    confirm.present();
  }

}
