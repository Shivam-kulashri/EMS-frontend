import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Route, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string="";
  password: string="";
  successMsg:string | undefined;
  errorMsg:string | undefined;

  constructor(private authService: AuthService, private router: Router){}

  onLogin(){
    this.authService.login({
    username:this.username,
    password:this.password
  }).subscribe({
    next:(data)=>{
      let token = data.token;
      this.authService.getUserDetails(token).subscribe({
        next:(data)=>{
          localStorage.setItem('token', token);
          localStorage.setItem('username',data.username);
          let role=data.role;
          switch(role){
            case 'Hr':
              console.log('take u to Hr screen');
              break;

            case 'Interviewer':
              console.log('take u to Interviewer screen')
              break;

            default:
              this.router.navigateByUrl("/broken-link");
              break;
          }
        },
        error: (err)=>{
          this.errorMsg = err.error.msg;
        }
      })
    },
    error: (err)=>{
      this.errorMsg= err.error.msg;
    }
  })
  }
}
