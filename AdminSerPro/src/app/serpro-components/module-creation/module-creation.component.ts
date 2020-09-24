import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { IcfesModule } from 'src/app/models/icfes-module.model';
import { IcfestModuleService } from '../../services/icfest-module.service'

@Component({
  selector: 'app-module',
  templateUrl: './module-creation.component.html',
  styleUrls: ['./module-creation.component.css'],
  providers: [IcfestModuleService]
})
export class ModuleComponent implements OnInit {

  constructor(public icfestModuleService: IcfestModuleService) { }

  ngOnInit(): void {
    this.getIcfesModule();
  };

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.icfestModuleService.selectedModule = new IcfesModule();
    };
  };

  getIcfesModule(){
    this.icfestModuleService.getIcfesModule()
    .subscribe(res=>{
      this.icfestModuleService.icfesModules=res as IcfesModule[];
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
