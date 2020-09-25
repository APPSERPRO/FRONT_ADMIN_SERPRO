import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcfesModule } from 'src/app/models/icfes-module.model';
import { IcfestModuleService } from '../../services/service-module/icfest-module.service'

@Component({
  selector: 'app-module',
  templateUrl: './module-creation.component.html',
  styleUrls: ['./module-creation.component.css'],
  providers: [IcfestModuleService]
})
export class ModuleComponent implements OnInit {
  
  icfesModules: [];
  selectedModule: IcfesModule;

  constructor(public icfestModuleService: IcfestModuleService) {
    this.selectedModule = new IcfesModule();
   }

  ngOnInit(): void {
    this.getIcfesModule();
  };

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.selectedModule = new IcfesModule();
    };
  };

  getIcfesModule(){
    this.icfestModuleService.getIcfesModule()
    .subscribe(res=>{
      // this.icfestModuleService.icfesModules=res as IcfesModule[];
      console.log(res)
    });
  };

  addModule( form: NgForm ): void {
    this.icfestModuleService.posIcfesModule(new IcfesModule(form.value))
    .subscribe(res =>{
      this.resetForm(form);
      this.getIcfesModule();
    });
  };
}
