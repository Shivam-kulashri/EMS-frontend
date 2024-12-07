import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../service/hr.service';

@Component({
  selector: 'app-view-interviews',
  imports: [NgFor],
  templateUrl: './view-interviews.component.html',
  styleUrl: './view-interviews.component.css'
})
export class ViewInterviewsComponent implements OnInit{

  interviews:any=[];

  constructor(private hrService:HrService){}
  ngOnInit(): void {
    this.hrService.getInterviewSchedule().subscribe({
      next:data=>{
        this.interviews=data;
      },
      error:err=>{
      }
    })
  }

}
