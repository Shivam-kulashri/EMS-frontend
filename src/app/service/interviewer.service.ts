import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {
  private addInterviewerApi='http://localhost:8081/interviewer/add'
  constructor(private httpClient: HttpClient) { }

  public addInterviewer(obj:any): Observable <any>{
    let iw_obj={
      name: obj.name,
      contact:obj. contact, 
      emailId: obj.emailId,
      interviewSpeciality: obj.interviewSpeciality, 
      position: obj.position,
      user:{
        id:obj.id,
        role:obj.role
      }
    }
    return this.httpClient.post(this.addInterviewerApi,iw_obj);
  }
}
