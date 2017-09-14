import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AssessmentPage } from '../pages/assessment/assessment';
import {  AssessmentDetailsPage } from '../pages/assessment-details/assessment-details';
import { TestPage } from '../pages/test/test';
import {  FindcoursesPage } from '../pages/findcourses/findcourses';
import {  CourseinfoPage } from '../pages/courseinfo/courseinfo';
import {  CoursecontentPage } from '../pages/coursecontent/coursecontent';
import {  Coursecontent1Page } from '../pages/coursecontent1/coursecontent1';
import {  SelectplanPage } from '../pages/selectplan/selectplan';
import {  SignupPage } from '../pages/signup/signup';
import {  LoginPage } from '../pages/login/login';
import {  ResultPage } from '../pages/result/result';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      {title: 'Assessment', component: AssessmentPage },
      {title: 'Assessment details', component: AssessmentDetailsPage },
      {title: 'Test', component: TestPage},
      {title: 'Find courses', component: FindcoursesPage},
      {title: 'Select plan', component: SelectplanPage},
      {title: 'Login', component: LoginPage}        
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
