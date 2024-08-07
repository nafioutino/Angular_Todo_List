import { Component,OnInit } from '@angular/core';
import { GetDateService } from './services/get-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dJour!:string;
  constructor(private today:GetDateService){}

  ngOnInit():void{
    this.dJour=this.today.dateDuJour()
  }
  title = 'myApp';
}
