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

  constructor() { 
    this.question = new Question ();
    this.question.answers.push(new Answer());
  }

  ngOnInit(): void {

  }

  addNewAnswer () {
    this.question.answers.push(new Answer());
  }

}
