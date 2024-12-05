import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HrService } from '../../../service/hr.service';

@Component({
  selector: 'app-post-job',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  postJob: FormGroup;
  successMsg:string|undefined;
  errorMsg:string|undefined;

  constructor(private hrService: HrService){
    this.postJob=new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      qualifications: new FormControl('',[Validators.required]),
      experienceRequired: new FormControl('',[Validators.required]),
      jobType: new FormControl('',[Validators.required]),
      salaryRange: new FormControl('',[Validators.required]),
      datePosted: new FormControl('',[Validators.required]),
      applicationDeadline: new FormControl('',[Validators.required]),
      hrId: new FormControl('',[Validators.required])
    })
  }

  onFormSubmit(){
    console.log(this.postJob);
    this.hrService.PostJob(this.postJob.value).subscribe({
      next:data=>{
        this.successMsg="Added Job SuccessFully!";
      },
      error:(err)=>{
        this.errorMsg="Couldn't Add Job!"
      },
    })
  }

}
