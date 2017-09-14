import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseinfoPage } from './courseinfo';


@NgModule({
  declarations: [
    CourseinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseinfoPage),
  ],
})
export class indcoursesPageModule {}