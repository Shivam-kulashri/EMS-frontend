import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  imports: [NgIf, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username: string ="";
  password: string ="";
  name: string="";
  role: any=localStorage.getItem('grole');
  errorMsg: string | undefined;
  successMsg: string | undefined;

  constructor(private authService: AuthService){}

  item: any = localStorage.removeItem('grole');
  onSignUp(){
    this.authService.signup({
    username: this.username,
    password: this.password,
    name: this.name,
    role:this.role
  }).subscribe({
    next: (data)=>{
      this.successMsg='Sign Up Success, Please Login';
    },
    error: (err)=>{
      console.log(err)
      this.errorMsg = err.msg; 
    }
  })
  }
}
