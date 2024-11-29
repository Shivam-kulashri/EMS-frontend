import { Component } from '@angular/core';
import { HrSidebarComponent } from "../../components/Hr/hr-sidebar/hr-sidebar.component";
import { HrNavbarComponent } from '../../components/Hr/hr-navbar/hr-navbar.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-hr-dashboard',
  imports: [HrSidebarComponent, HrNavbarComponent, RouterOutlet],
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.css'
})
export class HrDashboardComponent {

}
