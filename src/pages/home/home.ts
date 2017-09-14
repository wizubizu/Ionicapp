import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';
import { AssessmentPage } from '../assessment/assessment';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  load(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AssessmentPage, {
    });
  }

  loads(event, login) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LoginPage, {
    });
  }

}
