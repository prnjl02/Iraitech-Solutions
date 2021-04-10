import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFourComponent } from './question-four/question-four.component';
import { Component1Component } from './question-four/component1/component1.component';
import { Component2Component } from './question-four/component2/component2.component';
import { Component3Component } from './question-four/component3/component3.component';
import { Component4Component } from './question-four/component4/component4.component';
import { Component5Component } from './question-four/component5/component5.component';

@NgModule({
  declarations: [AppComponent, routingComponents, QuestionFourComponent, Component1Component, Component2Component, Component3Component, Component4Component, Component5Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
