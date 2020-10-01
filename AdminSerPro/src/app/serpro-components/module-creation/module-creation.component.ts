import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { IcfestModuleService } from 'src/app/services/service-module/icfest-module.service';
import { IcfesModule } from '../../models/module.model'

@Component({
  selector: 'app-icfes-module',
  templateUrl: './module-creation.component.html',
  styleUrls: ['./module-creation.component.css']
})
export class ModuleComponent implements OnInit {
  
  icfesModule: IcfesModule;
  formsCorrect : boolean = true;
  items: SelectItem[];
  item: string;

  constructor(private icfesModuleService: IcfestModuleService) {
    this.icfesModule = new IcfesModule();

   }

  ngOnInit(): void {

  };

  saveIcfesModule(){
    if(this.icfesModule.description != null){
      if(this.icfesModule.evaluationSubject != null){
        if(this.icfesModule.knowledgeArea != null){
          this.icfesModuleService.posIcfesModule(this.icfesModule);
        }
      }
    }
  }

}
