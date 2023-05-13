import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(private http:HttpClient){}
  projects:any;
  ngOnInit(){
    this.projects = this.http.get("http://127.0.0.1:8000/projects/").subscribe(
      data => this.projects = data
    )
  }
}
