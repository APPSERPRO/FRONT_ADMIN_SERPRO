import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { IcfesTestService } from 'src/app/services/icfes-test.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiple-selction-question',
  templateUrl: './multiple-selction-question.component.html',
  styleUrls: ['./multiple-selction-question.component.css']
})
export class MultipleSelctionQuestionComponent implements OnInit {

  question: Question;
  defaultAnsewersQty: number = 4;

  constructor(private icfesTestService: IcfesTestService) { 
    this.question = new Question ();
    this.question.type = environment.multipleSelectionQuestionType;
    
    for (let cont=0; cont< this.defaultAnsewersQty; cont++) {
      this.addNewAnswer();
    }
  }

  ngOnInit(): void {

  }

  addNewAnswer () {
    this.question.answers.push(new Answer());
  }

  removeAnswer (answerIndex) {
    this.question.answers.splice (answerIndex,1);
  }
  changeGradeValue (answer, increment: number) {
    if (answer.grade < 100 && increment >0) {
      answer.grade += increment;
    } else  if  (answer.grade > -100 && increment <0) {
      answer.grade += increment;
    }
  }

  saveQuestion () {
    this.icfesTestService.createQuestion (this.question);
  }

  change (event){
    console.log(event);
  }

  onInitEditor(event) {

    console.log (event);
    console.log (event.editor.options.modules);

    let newObj = {
      ...event.editor.options.modules,
      imageResize: {
        displaySize: true
      }
    }

    event.editor.options.modules = newObj;

    console.log (event.editor.options.modules);


  }

}
