import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Create Model', icon: 'pi pi-fw pi-pencil', routerLink: ['/addModule']},
      {label: 'Create Test', icon: 'pi pi-fw pi-pencil', routerLink: ['/addTest']},
      {label: 'Create Question', icon: 'pi pi-fw pi-pencil', routerLink: ['/addQuestion']}
    ]
  }

}
