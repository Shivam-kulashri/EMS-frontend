import { Component } from '@angular/core';
import { HrService } from '../../../service/hr.service';

@Component({
  selector: 'app-job-chart',
  imports: [],
  templateUrl: './job-chart.component.html',
  styleUrl: './job-chart.component.css'
})
export class JobChartComponent {
  candidates:any=[]
  clearedCount = 0;
  appliedCount = 0;
  underReviewCount = 0;
  rejectedCount = 0;
  onboardedCount = 0;
  data1:any=[this.onboardedCount,this.rejectedCount,this.appliedCount,this.clearedCount,this.underReviewCount,]

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
