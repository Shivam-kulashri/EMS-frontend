import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../../../service/interviewer.service';

@Component({
  selector: 'app-interviewer-candidate-list',
  imports: [NgFor, NgClass],
  templateUrl: './interviewer-candidate-list.component.html',
  styleUrl: './interviewer-candidate-list.component.css'
})
export class InterviewerCandidateListComponent implements OnInit{

  applicants:any=[];

  constructor(private interviewerService:InterviewerService){}

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
