import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HrService } from '../../../service/hr.service';

@Component({
  selector: 'app-view-job',
  imports: [NgFor],
  templateUrl: './view-job.component.html',
  styleUrl: './view-job.component.css'
})
export class ViewJobComponent {
  jobs: any=[];

  constructor(private hrService: HrService){
    this.hrService.getAllJobs().subscribe({
      next:data=>{
        this.jobs=data;
      },
      error:err=>{}
    })
  }

}
