import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../../../service/interviewer.service';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-interviewer-update-interview-details',
  imports: [FormsModule, NgIf],
  templateUrl: './interviewer-update-interview-details.component.html',
  styleUrl: './interviewer-update-interview-details.component.css'
})
export class InterviewerUpdateInterviewDetailsComponent implements OnInit{
  interviewers: any = []
  interview_id: any = localStorage.getItem('interview_id')
  successMsg:string|undefined;
  errorMsg:string|undefined;

  constructor(private interviewerService: InterviewerService){
    this.interviewerService.getScheduleById(this.interview_id).subscribe({
      next:data=>{
        this.interviewers=data;
        console.log(this.interviewers);
      },
      error:(err)=>{
      },
    })
  }

  ngOnInit(): void {
    
  }

  onFormSubmit(){
    this.interviewerService.updateScheduleById(this.interviewers,this.interview_id).subscribe({
      next:data=>{
        this.successMsg="Updated Interview Schedule!";
      },
      error:(err)=>{
        this.errorMsg="Sorry, Couldn't update !"
      },
    })
  }

}
