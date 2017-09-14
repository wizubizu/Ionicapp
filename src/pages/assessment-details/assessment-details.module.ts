import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssessmentDetailsPage } from './assessment-details';

@NgModule({
  declarations: [
    AssessmentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssessmentDetailsPage),
  ],
})
export class AssessmentDetailsPageModule {}
