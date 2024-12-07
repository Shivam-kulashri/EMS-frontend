import { Component } from '@angular/core';
import { InterviewerSidebarComponent } from "../../components/Interviewer/interviewer-sidebar/interviewer-sidebar.component";
import { InterviewerNavbarComponent } from "../../components/Interviewer/interviewer-navbar/interviewer-navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interviewer-dashboard',
  imports: [InterviewerSidebarComponent, InterviewerNavbarComponent,RouterOutlet],
  templateUrl: './interviewer-dashboard.component.html',
  styleUrl: './interviewer-dashboard.component.css'
})
export class InterviewerDashboardComponent {

}
