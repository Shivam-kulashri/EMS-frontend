import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-option',
  imports: [],
  templateUrl: './user-option.component.html',
  styleUrl: './user-option.component.css'
})
export class UserOptionComponent {
  constructor(private router: Router){}

  navivateToLogin(){
    this.router.navigateByUrl("/login")
  }
  navivateToSignUp(){
    this.router.navigateByUrl("/get-roles")
  }
}
