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
  jobs: any[]=[];
  page:number=0;
  size:number=8;
  totalElements: number = 0;
  pageArray:any[] =[];


  constructor(private hrService: HrService){
    this.getData();
  }

  getData(){
      this.hrService.getJobPageble(this.page,this.size).subscribe({
        next:(resp)=>{
          this.jobs = resp.content; 
          this.totalElements = resp.totalElements;
          let totalPages = this.totalElements / this.size;
          let i=1; 
          this.pageArray = [];
          while(totalPages > 0){
            this.pageArray.push(i)
            totalPages = totalPages - 1;
            i++;
          }
          console.log(this.pageArray)
        },
        error:()=>{}
      })
     }
     prev(){
       if(this.page >0){
        this.page = this.page - 1 
        this.getData() 
      }
          
     }
     next(){
      this.page = this.page + 1 
      this.getData()
     }
     onClick(i:number){
        this.page = i
        this.getData()
  }
}
