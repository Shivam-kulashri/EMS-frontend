import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InterviewerService } from '../../../service/interviewer.service';

@Component({
  selector: 'app-interviewer-profile',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './interviewer-profile.component.html',
  styleUrl: './interviewer-profile.component.css'
})
export class InterviewerProfileComponent {
  interviewerRegister: FormGroup;
  successMsg:string|undefined;
  errorMsg:string|undefined;

  constructor(private interviewerService: InterviewerService){
    this.interviewerRegister = new FormGroup({
      name:  new FormControl('',[Validators.required]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailId: new FormControl('',[Validators.required]),
      interviewSpeciality:  new FormControl('',[Validators.required]),
      position:  new FormControl('',[Validators.required]),
      id:  new FormControl(localStorage.getItem('userId'),[Validators.required]),
      role:  new FormControl(localStorage.getItem('role'),[Validators.required]),
    })
  }
    onFormSubmit(){
      console.log(this.interviewerRegister.value);
      this.interviewerService.addInterviewer(this.interviewerRegister.value).subscribe({
        next:data=>{
          this.successMsg="Added Interviewer Profile! Your Interviewer ID is:"+data.id;
          localStorage.setItem('id',data.id)
        },
        error:(err)=>{
          this.errorMsg="Sorry, Couldn't Add Profile !"
        },
      })
    }

  }
