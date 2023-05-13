import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    constructor(private http:HttpClient){}
    projects:any;

    ngOnInit():void{
      this.projects = this.http.get("http://127.0.0.1:8000/projects/").subscribe(
        data => this.projects = data
      )
  }
}
