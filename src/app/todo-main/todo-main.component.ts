import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})
export class TodoMainComponent {
  message!:string;

  constructor(private myService:MyServiceService){}

  ngOnInit():void{
    this.message=this.myService.getHello();
  }


  getTaskName!:string;
  receiveTaskName(val:string){
  this.getTaskName=val;    
  }



}
