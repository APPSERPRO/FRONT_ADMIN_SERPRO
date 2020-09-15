import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCreationComponent } from './serpro-components/question-creation/question-creation.component';
import { MultipleSelctionQuestionComponent } from './serpro-components/question-creation/question/multiple-selction-question/multiple-selction-question.component';


// Import NGPrime Modules
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCreationComponent,
    MultipleSelctionQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
