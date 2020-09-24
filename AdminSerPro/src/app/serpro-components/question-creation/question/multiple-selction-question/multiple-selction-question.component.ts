import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { IcfesTestService } from 'src/app/services/icfest-question.service';
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
    this.question.questionType = environment.multipleSelectionQuestionType;
    
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
    this.icfesTestService.createQuestion(this.question);
    /*
    let ansWrds = this.question.answers;
    let correct = true;

    if(this.question.statement != null){
      for (let i of ansWrds){
        if (i.statement == undefined || i.grade==0){
          correct =false;
           alert("No has llenado algún campo de respuesta");
           break;
        }
      }
           if(this.question.feedback != null && correct == true) {
             this.icfesTestService.createQuestion(this.question);
           }else{
             alert("No has llenado el campo de  Retroalimentación");
           }
    }
    else{
      alert("Falta por llenar el enunciado");
    }*/
  }


}
