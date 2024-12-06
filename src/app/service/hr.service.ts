import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  addJobApi='http://localhost:8081/job/add'
  getAllJobsApi='http://localhost:8081/job/all'
  getAllInterviw='http://localhost:8081/interviewschedular/all'
  addHrApi='http://localhost:8081/hr/addHr'


  constructor(private httpClient: HttpClient) {  
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
}
