import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../../../service/interviewer.service';

@Component({
  selector: 'app-interviewer-update-application',
  imports: [NgClass, NgFor],
  templateUrl: './interviewer-update-application.component.html',
  styleUrl: './interviewer-update-application.component.css'
})
export class InterviewerUpdateApplicationComponent implements OnInit{
  applicants: any = [];
  statuses: string[] = ['Onboarded', 'Applied', 'Rejected', 'Cleared', 'Under Review'];
  successMsg: string | undefined;
  errorMsg: string | undefined;

  constructor(private interviewerService:InterviewerService){}
 

  changeStatus(id: any, status: string) {
    this.interviewerService.updateApplication(id, status).subscribe({
      next: (data) => {
        const applicant = this.applicants.find((app: any) => app.applicationId === id);
        if (applicant) {
          applicant.applicationStatus = status;
        }
      },
      error: (err) => {
      }
    });
  }

    ngOnInit(): void {
      this.interviewerService.getAllCandidate().subscribe({
        next:data=>{
          this.applicants=data;
        },
        error:(err)=>{
        },
      })
    }


  }
