import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-multiple-selction-question',
  templateUrl: './multiple-selction-question.component.html',
  styleUrls: ['./multiple-selction-question.component.css']
})
export class MultipleSelctionQuestionComponent implements OnInit {

  question: Question;
  defaultAnsewersQty: number = 4;

  constructor() { 
    this.question = new Question ();
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
    
  }
}
