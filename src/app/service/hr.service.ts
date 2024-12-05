import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  addJobApi='http://localhost:8080/job/add'
  getAllJobsApi='http://localhost:8080/batch/all'
  getAllInterviw='http://localhost:8080/interviewschedular/all'


  constructor(private httpClient: HttpClient) {  
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
