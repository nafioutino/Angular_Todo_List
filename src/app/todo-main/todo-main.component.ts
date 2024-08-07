import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})
export class TodoMainComponent {
  message!:string;


  getTaskName!:string;
  receiveTaskName(val:string){
  this.getTaskName=val;    
  }



}
