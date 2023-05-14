import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  constructor(private http:HttpClient){}
  people:any;

  ngOnInit():void{
    this.people = this.http.get("http://127.0.0.1:8000/person/").subscribe(
      data => this.people = data
    )
}
}
