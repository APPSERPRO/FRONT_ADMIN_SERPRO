import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcfesModule } from '../models/icfes-module.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IcfestModuleService {

  constructor(private http: HttpClient) {
    
  }

  getIcfesModule(){
    return this.http.get(`${environment.urlApiQuestionsSerpro}module`);
  }

  posIcfesModule(icfesModule:IcfesModule)  {
    return this.http.post(`${environment.urlApiQuestionsSerpro}module`, icfesModule);
  }

}
