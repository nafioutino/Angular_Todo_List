import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrl: './todo-header.component.css'
})
export class TodoHeaderComponent {
  title:string = "";
  @Output() passTaskName = new EventEmitter <string>();

  sendTaskName(){
    this.passTaskName.emit(this.title);
    this.title=""
    
  }

}
