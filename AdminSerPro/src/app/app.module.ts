import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
             



import Quill from 'quill';
import ImageResize  from 'quill-image-resize';
import { ModuleComponent } from './serpro-components/module-creation/module-creation.component';
import { TestCreationComponent } from './serpro-components/test-creation/test-creation.component'



@NgModule({
  declarations: [
    AppComponent,
    QuestionCreationComponent,
    MultipleSelctionQuestionComponent,
    SerproNgQuillComponent,
    ModuleComponent,
    TestCreationComponent,
    
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
    FormsModule,
    AccordionModule,    
    HttpClientModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    Quill.register('modules/imageResize', ImageResize);
  }
 }
