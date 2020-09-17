import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCreationComponent } from './serpro-components/question-creation/question-creation.component';
import { MultipleSelctionQuestionComponent } from './serpro-components/question-creation/question/multiple-selction-question/multiple-selction-question.component';
import { SerproNgQuillComponent } from './serpro-ng-quill/serpro-ng-quill.component';


// Import NGPrime Modules
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';


import Quill from 'quill';
import ImageResize  from 'quill-image-resize'



@NgModule({
  declarations: [
    AppComponent,
    QuestionCreationComponent,
    MultipleSelctionQuestionComponent,
    SerproNgQuillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    SliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    Quill.register('modules/imageResize', ImageResize);
  }
 }
