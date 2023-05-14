import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peopleprojects',
  templateUrl: './peopleprojects.component.html',
  styleUrls: ['./peopleprojects.component.css']
})
export class PeopleprojectsComponent implements OnInit {

  constructor(private http:HttpClient, private route: ActivatedRoute){}
  projects:any;
  id: number | undefined;

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.projects = this.http.get("http://127.0.0.1:8000/personprojects/"+id+"/").subscribe(data => this.projects = data)

    });

  } 
}
