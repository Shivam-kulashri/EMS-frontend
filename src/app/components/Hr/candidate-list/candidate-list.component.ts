import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../service/hr.service';

@Component({
  selector: 'app-candidate-list',
  imports: [NgFor],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.css'
})
export class CandidateListComponent implements OnInit{
  
  applicants: any=[];

  constructor(private hrService: HrService){}

  ngOnInit(): void {
    this.hrService.getOnboardedApplicants().subscribe({
      next:data=>{
        this.applicants=data;
      },
      error:(err)=>{
      },
    })
  }

}
