import { Component, ɵDeferBlockConfig } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HrService } from '../../../service/hr.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  hrRegister: FormGroup;
  successMsg:string|undefined;
  errorMsg:string|undefined;

  constructor(private hrService:HrService){
    this.hrRegister=new FormGroup({
      emailId: new FormControl('',[Validators.required,Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      name: new FormControl('',[Validators.required]),
      userid: new FormControl(localStorage.getItem('userId'),[Validators.required]),
      role: new FormControl(localStorage.getItem('role'),[Validators.required]),
    })
  }
  
  onFormSubmit(){
    console.log(this.hrRegister.value);
    this.hrService.addHr(this.hrRegister.value).subscribe({
      next:data=>{
        this.successMsg="Added HR Profile! Your HR ID is:"+data.id;
        localStorage.setItem('hr_id',data.id);
      },
      error:(err)=>{
        this.errorMsg="Sorry, Couldn't Add Profile !"
      },
    })
  }
}
