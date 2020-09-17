import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class IcfesTestService {

  constructor() { }

  createQuestion (question: Question) {
    console.log ("Hola",question);
  }
}
