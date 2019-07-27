import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { map } from 'rxjs-compat/operator/map';


const baseUrl = 'http://localhost:3000/DashboardCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
   
  }

  clickMe(){
    this.http.get(baseUrl)
    .do(resp => console.log(resp));
    this.http.get(baseUrl).subscribe(resp => console.log(resp));
  }

}
