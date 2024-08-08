import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  users:any[] = [];

  constructor(private userService:HttpService){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{
      this.users = data
    })
  }

}
