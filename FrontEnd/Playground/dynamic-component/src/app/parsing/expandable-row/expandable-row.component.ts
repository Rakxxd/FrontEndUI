import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-row',
  templateUrl: './expandable-row.component.html',
  styleUrls: ['./expandable-row.component.css']
})
export class ExpandableRowComponent implements OnInit {
groups:any;
drillDown=false;
  constructor() { 
    this.groups = [
      {name:'DBService', status:'okay'},
      {name:'Cache', status:'okay'},
      {name:'Members', status:'error'}
  ];
  }

  onDrill(){
    this.drillDown=!this.drillDown;
  }

  ngOnInit() {
  }

}
