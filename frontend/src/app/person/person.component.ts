import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private http:HttpClient, private route: ActivatedRoute){}
    person:any;

    ngOnInit():void{
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
  
        this.person = this.http.get("http://127.0.0.1:8000/person/"+id+"/").subscribe(data => this.person= data)
  
      });
    }

}
