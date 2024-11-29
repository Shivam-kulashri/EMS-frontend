import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hr-sidebar',
  imports: [RouterLink],
  templateUrl: './hr-sidebar.component.html',
  styleUrl: './hr-sidebar.component.css'
})
export class HrSidebarComponent {
    linkType: string='';
     
    linkClick(linkType:string){
      this.linkType = linkType;
    }
    getClassOn(){
      return {
        active: this.linkType === 'schedule'?true: false
      }
    }
}
