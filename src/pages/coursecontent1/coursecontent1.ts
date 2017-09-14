import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursecontentPage } from '../coursecontent/coursecontent';

/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursecontent1',
  templateUrl: 'coursecontent1.html',
})
export class Coursecontent1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Coursecontent1Page');
  }

  load(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CoursecontentPage, {
    });
  }

}
