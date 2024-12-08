import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../../../service/interviewer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviewer-see-all-interview',
  imports: [NgFor],
  templateUrl: './interviewer-see-all-interview.component.html',
  styleUrl: './interviewer-see-all-interview.component.css'
})
export class InterviewerSeeAllInterviewComponent implements OnInit{
  interviews: any=[]

  constructor(private interviewerService: InterviewerService, private router: Router){}

  ngOnInit(): void {
    this.interviewerService.getMyInterviews().subscribe({
      next:data=>{
        this.interviews=data;
      },
      error:(err)=>{
      },
    })

  }
  updateInterview(arg0: any) {
    localStorage.setItem('interview_id',arg0);
    this.router.navigateByUrl("/interviewer-dashboard/iupdate");
    }


}
