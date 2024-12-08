import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  private addJobApi='http://localhost:8081/job/add'
  private getAllJobsApi='http://localhost:8081/job/all'
  private getAllInterviw='http://localhost:8081/interviewschedular/all'
  private addHrApi='http://localhost:8081/hr/addHr'
  private getApplicantDetailsApi='http://localhost:8081/hr/getApplicantDetails'
  private getInterviewScheduleApi='http://localhost:8081/interviewschedular/all'  
  private getClearedApplicantApi='http://localhost:8081/application/getAllCleared'
  private updateApplicationApi='http://localhost:8081/application/update/'
  private getOnboardedApplicantApi='http://localhost:8081/application/getAllOnboarded'
  private getAllCandidatesApi='http://localhost:8081/application/all'
  private getJobsPagebleApi='http://localhost:8081/jobs/pagable/all'


  constructor(private httpClient: HttpClient) {  
  }

  public getAllCandidates(){
    return this.httpClient.get(this.getAllCandidatesApi);
  }

  public updateApplication(id:any): Observable<any>{
    let app_obj={
      applicationStatus:'Onboarded'
    }
    return this.httpClient.put(this.updateApplicationApi+id,app_obj);
  }

  public getJobPageble(page:number,size:number): Observable<any>{
    return this.httpClient.get(this.getJobsPagebleApi+'?page='+page+'&size='+size)
  }
  public addHr(obj:any): Observable<any>{
    let hr_obj={
      emailId:obj.emailId,
      contact:obj.contact,
      name:obj.name,
      user:{
        id:obj.userid,
        role:obj.role
      }
    }
    console.log(hr_obj);
    return this.httpClient.post(this.addHrApi,hr_obj);
  }

  public getAllJobs(){
    return this.httpClient.get(this.getAllJobsApi);
  }

  public PostJob(obj:any):Observable<any> {
    let job_obj={
      title:obj.title,
      description:obj.description,
      location:obj.location,
      qualifications:obj.qualifications,
      experienceRequired:obj.experienceRequired,
      jobType:obj.jobType,
      salaryRange:obj.salaryRange,
      datePosted:obj.datePosted,
      applicationDeadline:obj.applicationDeadline,
      hr:{
        id:obj.hrId
      }
    }

    return this.httpClient.post(this.addJobApi,job_obj);
  }

  public getApplicantDetails(){
    return this.httpClient.get(this.getApplicantDetailsApi);
  }

  public getInterviewSchedule(){
    return this.httpClient.get(this.getInterviewScheduleApi);
  }
  public getClearedApplicants(){
    return this.httpClient.get(this.getClearedApplicantApi);
  }
  public getOnboardedApplicants(){
    return this.httpClient.get(this.getOnboardedApplicantApi);
  }
}
