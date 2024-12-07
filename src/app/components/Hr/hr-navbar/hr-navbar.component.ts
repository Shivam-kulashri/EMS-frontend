import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hr-navbar',
  imports: [RouterLink],
  templateUrl: './hr-navbar.component.html',
  styleUrl: './hr-navbar.component.css'
})
export class HrNavbarComponent {
 name:any=localStorage.getItem('name');
}
