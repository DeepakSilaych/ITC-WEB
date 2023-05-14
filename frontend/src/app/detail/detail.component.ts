import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private http:HttpClient, private route: ActivatedRoute){}
  project:any;
  id: number | undefined;

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.project = this.http.get("http://127.0.0.1:8000/projects/"+id+"/").subscribe(data => this.project = data)

    });

  } 
}
