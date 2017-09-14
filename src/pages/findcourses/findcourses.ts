import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseinfoPage } from '../courseinfo/courseinfo';

/**
 * Generated class for the AssessmentDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-findcourses',
  templateUrl: 'findcourses.html',
})
export class FindcoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindcoursesPage');
  }


   load(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CourseinfoPage, {
    });
  }

}
