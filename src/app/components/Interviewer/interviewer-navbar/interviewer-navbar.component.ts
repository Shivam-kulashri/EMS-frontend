import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interviewer-navbar',
  imports: [RouterLink],
  templateUrl: './interviewer-navbar.component.html',
  styleUrl: './interviewer-navbar.component.css'
})
export class InterviewerNavbarComponent {
  name:any=localStorage.getItem('name');
}
