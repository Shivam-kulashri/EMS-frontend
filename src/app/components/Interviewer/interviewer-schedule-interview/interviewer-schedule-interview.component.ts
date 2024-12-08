import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InterviewerService } from '../../../service/interviewer.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-interviewer-schedule-interview',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './interviewer-schedule-interview.component.html',
  styleUrl: './interviewer-schedule-interview.component.css'
})
export class InterviewerScheduleInterviewComponent{
  interviewForm: FormGroup;
  successMsg:string|undefined;
  errorMsg:string|undefined;

  constructor(private interviewerService: InterviewerService){
    this.interviewForm = new FormGroup({
      interviewDate: new FormControl('',[Validators.required]),
      interviewTime: new FormControl('',[Validators.required]),
      interviewMode: new FormControl('',[Validators.required]),
      interviewStatus: new FormControl('',[Validators.required]),
      interviewType: new FormControl('',[Validators.required]),
      lastUpdated: new FormControl('',[Validators.required]),
      interviewerId:new FormControl(localStorage.getItem('id'),[Validators.required])
    });
  }
  onFormSubmit(){
    this.interviewerService.addInterview(this.interviewForm.value).subscribe({
      next:data=>{
        this.successMsg="Added Interview SuccessFully!";
        localStorage.setItem('interview_id', data.id)
      },
      error:(err)=>{
        this.errorMsg="Sorry, Couldn't Add Interview!"
      },
    })
  }

}
