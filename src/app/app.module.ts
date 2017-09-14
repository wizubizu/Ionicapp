import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SliderPage } from '../pages/slider/slider'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AssessmentPage } from '../pages/assessment/assessment';
import {  AssessmentDetailsPage } from '../pages/assessment-details/assessment-details';
import { TestPage } from '../pages/test/test';
import { FindcoursesPage } from '../pages/findcourses/findcourses';
import { CourseinfoPage } from '../pages/courseinfo/courseinfo';
import { CoursecontentPage } from '../pages/coursecontent/coursecontent';
import { Coursecontent1Page } from '../pages/coursecontent1/coursecontent1';
import { SelectplanPage } from '../pages/selectplan/selectplan';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ResultPage } from '../pages/result/result';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SliderPage,
    AssessmentPage,
    AssessmentDetailsPage,
    TestPage,
    FindcoursesPage,
    CourseinfoPage,
    CoursecontentPage,
    Coursecontent1Page,
    SelectplanPage,
    SignupPage,
    LoginPage,
    ResultPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SliderPage,
    AssessmentPage,
    AssessmentDetailsPage,
    TestPage,
    FindcoursesPage,
    CourseinfoPage,
    CoursecontentPage,
    Coursecontent1Page,
    SelectplanPage,
    SignupPage,
    LoginPage,
    ResultPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
