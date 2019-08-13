import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
@Input() entity;
message= "The error was caused by";
expandent=false;
 

  constructor() { }

  ngOnInit() {
    console.log(this.entity);
  }

  entityExpand(){
    this.expandent = !this.expandent;
  }

}
