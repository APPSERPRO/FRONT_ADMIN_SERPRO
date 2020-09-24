import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { IcfesTest } from 'src/app/models/icfes-test.model';
//import { IcfesTest } from 'src/app/models/icfes-module.model';
import { IcfesTestService } from '../../services/icfes-test.service'

@Component({
  selector: 'app-test-creation',
  templateUrl: './test-creation.component.html',
  styleUrls: ['./test-creation.component.css'],
  providers: [IcfesTestService]
})
export class TestCreationComponent implements OnInit {

  constructor(public icfesTestService: IcfesTestService) { }

  ngOnInit(): void {
    this.getIcfesModule();
  };

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.icfesTestService.selectedTest = new IcfesTest();
    };
  };

  getIcfesModule(){
    this.icfesTestService.getIcfesTest()
    .subscribe(res=>{
      this.icfesTestService.icfesTests=res as IcfesTest[];
      console.log(res)
    });
  };

  addModule( form: NgForm ): void {
    this.icfesTestService.posIcfesModule(new IcfesTest(form.value))
    .subscribe(res =>{
      this.resetForm(form);
      this.getIcfesModule();
    });
  };
}
