import { Component, OnInit } from '@angular/core';
import { IcfesTest } from '../../models/test.model';
import { SelectItem } from 'primeng/api';
import { IcfesTestService } from '../../services/service-test/icfes-test.service';
import { IcfestQuestionService } from 'src/app/services/service-question/icfest-question.service';
import { IcfestModuleService } from '../../services/service-module/icfest-module.service';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-test-creation',
  templateUrl: './test-creation.component.html',
  styleUrls: ['./test-creation.component.css']
})
export class TestCreationComponent implements OnInit {

  icfesTest: IcfesTest;
  itemsModules: SelectItem[];
  itemModule: string;

  itemsQuestions: SelectItem[];
  itemQuestion: Question;

  questionsSelected: Question[];

  constructor(
    private icfesTestService: IcfesTestService,
    private icfestQuestionService: IcfestQuestionService,
    private icfesModuleServices: IcfestModuleService
  ) { 
    this.questionsSelected = [];
    
    this.icfesTest = new IcfesTest();
    this.icfesModuleServices.getIcfesModule().subscribe((res: any)=>{
      this.itemsModules = [];
        for (let i = 0; i < res.length; i++) {
            this.itemsModules.push({label: res[i].knowledgeArea, value: res[i]._id});
        }  
    });

    this.icfestQuestionService.getQuestions().subscribe((res: any)=>{
      this.itemsQuestions = [];
      for (let i = 0; i< res.length; i++){

        this.itemsQuestions.push({label: res[i].title, value: res[i]});
      }
    });
  };

  ngOnInit(): void {
  }

  deleteQuestion(_id: String){
    let posDelete;
    for(let i=0; i<this.questionsSelected.length; i++){
      if(_id==this.questionsSelected[i]._id){
        posDelete=i;
      }
    }

    this.questionsSelected.splice(posDelete,1);
  }

  updateList() {
    this.questionsSelected.push(this.itemQuestion);
  }

  saveQuestion(){
    this.updateList();

    //CREATE A TEMPORAL ARRAY WHIT QUESTIONID
    let questionId = [];
    for(let i=0; i<this.questionsSelected.length; i++){
      questionId.push(this.questionsSelected[i]._id);
    }

    
    this.icfesTest.questions=questionId;
    this.icfesTestService.posIcfesModule(this.icfesTest);
  }

}
