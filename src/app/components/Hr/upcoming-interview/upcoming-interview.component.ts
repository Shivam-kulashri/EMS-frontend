import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../service/hr.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-upcoming-interview',
  imports: [NgFor],
  templateUrl: './upcoming-interview.component.html',
  styleUrl: './upcoming-interview.component.css'
})
export class UpcomingInterviewComponent implements OnInit{
  interviews:any=[]
  recentFive:any=[]
  constructor(private hrService:HrService){
  }

  ngOnInit(): void {
    this.hrService.getInterviewSchedule().subscribe({
      next:data=>{
        this.interviews=data;
        this.getUpcomingInterviews();
        console.log(this.recentFive);
      },
      error:(err)=>{
      },
    })
  }

  getUpcomingInterviews() {
    // Sort interviews by interview date in ascending order (upcoming first)
    this.interviews.sort((a: { interviewDate: Date; }, b: { interviewDate: Date; }) => new Date(a.interviewDate).getTime() - new Date(b.interviewDate).getTime());

    // Extract the 5 upcoming interviews and store them in recentFive
    for (let i = 0; i < Math.min(this.interviews.length, 5); i++) {
      this.recentFive.push(this.interviews[i]);
    }
  }

}
