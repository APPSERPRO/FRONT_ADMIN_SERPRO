import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { IcfesTest } from 'src/app/models/test.model';
import { IcfesTestService } from '../../services/service-test/icfes-test.service'

@Component({
  selector: 'app-test-creation',
  templateUrl: './test-creation.component.html',
  styleUrls: ['./test-creation.component.css'],
})
export class TestCreationComponent implements OnInit {

  constructor(public icfesTestService: IcfesTestService) { }

  ngOnInit(): void {

  };

}
