import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';

/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assessment-details',
  templateUrl: 'assessment-details.html',
})
export class AssessmentDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentDetailsPage');
  }


  load(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TestPage, {
    });
  }
}
