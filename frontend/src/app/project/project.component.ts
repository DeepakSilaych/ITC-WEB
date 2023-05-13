import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    constructor(private http:HttpClient){}
      projects:any;

      ngOnInit():void{
        this.projects = this.http.get("http://127.0.0.1:8000/projects/").subscribe(
          data => this.projects = data
        )
    }
}
