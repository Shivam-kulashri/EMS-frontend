import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {
  private addInterviewerApi='http://localhost:8081/interviewer/add'
  private addInterviewApi='http://localhost:8081/InterviewSchedular/add'
  private getMyInterviewsApi='http://localhost:8081/interviewers/id?id='
  private getScheduleByIdApi='http://localhost:8081/interview/'
  private updateScheduleByIdApi='http://localhost:8081/update/'
  private getAllCandidateApi='http://localhost:8081/hr/getApplicantDetails'
  private updateApplicationApi='http://localhost:8081/application/update/'

  constructor(private httpClient: HttpClient) { }

  public updateApplication(id:any,status:any): Observable<any>{
    let app_obj={
      applicationStatus:status
    }
    return this.httpClient.put(this.updateApplicationApi+id,app_obj);
  }

  public getAllCandidate(){
    return this.httpClient.get(this.getAllCandidateApi);
  }

  public updateScheduleById(obj:any,id:any): Observable<any> {
    let new_obj={
      interviewDate: obj.interviewDate,
      interviewTime:obj.interviewTime, 
      interviewMode: obj.interviewMode,
      interviewStatus: obj.interviewStatus, 
      interviewType: obj.interviewType,
      lastUpdated: obj.lastUpdated
    }
    return this.httpClient.put(this.updateScheduleByIdApi+id,new_obj);
  }
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

  public getScheduleById(id:any){
    return this.httpClient.get(this.getScheduleByIdApi+id);
  }

  public getMyInterviews(){
    return this.httpClient.get(this.getMyInterviewsApi+localStorage.getItem('id'));
  }

  public addInterview(obj:any): Observable <any>{
   let iwr_obj={
    interviewDate: obj.interviewDate,
    interviewTime: obj.interviewTime,
    interviewMode: obj.interviewMode,
    interviewStatus: obj.interviewStatus,
    interviewType: obj.interviewType,
    lastUpdated: obj.lastUpdated,
    interviewer:{
      id:obj.interviewerId
    }
   }

   return this.httpClient.post(this.addInterviewApi,iwr_obj);
  }
}
