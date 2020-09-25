import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { IcfestQuestionService } from 'src/app/services/service-question/icfest-question.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-multiple-selction-question',
  templateUrl: './multiple-selction-question.component.html',
  styleUrls: ['./multiple-selction-question.component.css']
})
export class MultipleSelctionQuestionComponent implements OnInit {

  question: Question;
  defaultAnsewersQty: number = 4;
  formsCorrect : boolean = true;

  constructor(private icfestQuestionService: IcfestQuestionService) {
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
    this.question.icfesModuleId = "5f6ba07fe1207d35dcded4cc";
    this.icfestQuestionService.createQuestion(this.question);
    
    let ansWrds = this.question.answers;

    if(this.question.statement != null){
      for (let i of ansWrds){
        if (i.statement == undefined || i.grade==0){
          this.formsCorrect =false;
          //alert("No has llenado algún campo de respuesta");
          break;
        }
      }
      if(this.question.feedback != null) {
        this.icfesTestService.createQuestion(this.question);
      }else{
        this.formsCorrect =false;
        //alert("No has llenado el campo de  Retroalimentación");
      }
    }
    else{
      this.formsCorrect =false;
      //alert("Falta por llenar el enunciado");
    }
  }


}
