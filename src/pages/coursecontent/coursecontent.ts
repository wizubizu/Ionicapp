import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Coursecontent1Page } from '../coursecontent1/coursecontent1';

/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursecontent',
  templateUrl: 'coursecontent.html',
})
export class CoursecontentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursecontentPage');
  }

  load(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Coursecontent1Page, {
    });
  }

}
