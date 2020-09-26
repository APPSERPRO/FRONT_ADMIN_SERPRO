import { Component, OnInit, ɵConsole } from '@angular/core';
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
  QuestionsSelected: Question[];
  itemsSelectedQuestions: SelectItem[];


  constructor(
    private icfesTestService: IcfesTestService,
    private icfestQuestionService: IcfestQuestionService,
    private icfesModuleServices: IcfestModuleService
  ) { 
    this.itemsSelectedQuestions = [];
    this.QuestionsSelected = [];
    
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

        this.itemsQuestions.push({label: res[i].statement, value: res[i]});
      }
    });
  };

  ngOnInit(): void {
  }

  updateList() {
    this.QuestionsSelected.push(this.itemQuestion);
    this.itemsSelectedQuestions.push({label: this.itemQuestion.feedback, value: this.itemQuestion});
    console.log(this.itemsSelectedQuestions);
  }

  saveQuestion(){
    this.updateList();

    this.icfesTest.questions=this.QuestionsSelected;
    this.icfesTestService.posIcfesModule(this.icfesTest);

    console.log(this.icfesTest);
  }

}
