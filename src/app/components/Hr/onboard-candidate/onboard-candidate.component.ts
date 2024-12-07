import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../service/hr.service';

@Component({
  selector: 'app-onboard-candidate',
  imports: [NgFor],
  templateUrl: './onboard-candidate.component.html',
  styleUrl: './onboard-candidate.component.css'
})
export class OnboardCandidateComponent implements OnInit{
  applicants: any=[];
  successMsg: string|undefined;
  errorMsg: string|undefined;

  constructor(private hrService: HrService){}

  onboardApplicant(id: any, index:number) {
    this.hrService.updateApplication(id).subscribe({
      next:data=>{
        this.successMsg="onboared SuccessFully!";
        this.applicants.splice(index, 1);
      },
      error:(err)=>{
        this.errorMsg="Couldn't onboard"
      }
    })
    }


  ngOnInit(): void {
    this.hrService.getClearedApplicants().subscribe({
      next:data=>{
        this.applicants=data;
      },
      error:err=>{
      }
    })
  }
}
