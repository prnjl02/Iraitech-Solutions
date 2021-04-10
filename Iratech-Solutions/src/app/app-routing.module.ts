import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { PhoneNumberFormComponent } from './phone-number-form/phone-number-form.component';
import { QuestionFourComponent } from './question-four/question-four.component';

const routes: Routes = [
  {
    path: 'missingNumber',
    component: MissingNumberComponent,
  },
  {
    path: 'form',
    component: PhoneNumberFormComponent,
  },
  {
    path: 'question4',
    component: QuestionFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  MissingNumberComponent,
  PhoneNumberFormComponent,
];
