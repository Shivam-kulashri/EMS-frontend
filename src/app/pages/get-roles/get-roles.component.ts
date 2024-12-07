import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-roles',
  imports: [],
  templateUrl: './get-roles.component.html',
  styleUrl: './get-roles.component.css'
})
export class GetRolesComponent {
  constructor(private router: Router){}

  navigateToJobseeker(){
    localStorage.setItem('grole','Jobseeker')
    this.router.navigateByUrl("/sign-up")
  }
  navigateToInterviewer(){
    localStorage.setItem('grole','Interviewer')
    this.router.navigateByUrl("/sign-up")
  }
  navigateToHr(){
    localStorage.setItem('grole','Hr')
    this.router.navigateByUrl("/sign-up")
  }
}
