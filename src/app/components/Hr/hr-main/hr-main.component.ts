import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../service/hr.service';
import { UpcomingInterviewComponent } from "../upcoming-interview/upcoming-interview.component";

@Component({
  selector: 'app-hr-main',
  imports: [UpcomingInterviewComponent],
  templateUrl: './hr-main.component.html',
  styleUrl: './hr-main.component.css'
})
export class HrMainComponent implements OnInit{
  candidates:any=[]
  clearedCount = 0;
  appliedCount = 0;
  underReviewCount = 0;
  rejectedCount = 0;
  onboardedCount = 0;

  constructor(private hrService:HrService){
  }
  ngOnInit(): void {
    this.hrService.getAllCandidates().subscribe({
      next:data=>{
        this.candidates=data;
        console.log(data);
        this.calculateCandidateCounts();
      },
      error:(err)=>{
      },
    })
  }

  calculateCandidateCounts() {
    // Iterate over the candidates array
    for (let candidate of this.candidates) {
      const status = candidate.applicationStatus;
      if (status === 'Cleared') {
        this.clearedCount++;
      } else if (status === 'Applied') {
        this.appliedCount++;
      } else if (status === 'Under Review') {
        this.underReviewCount++;
      } else if (status === 'Rejected') {
        this.rejectedCount++;
      } else if (status === 'Onboarded') {
        this.onboardedCount++;
      }
    }
  }

}
