import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
@Input() table;
expanded=false;
entities = [{"name":"I/O process","status":"error"},
{"name":"CPU LOad","status":"okay"},
{"name":"Memory process","status":"error"},
{"name":"FOPS","status":"Warning"},
{"name":"DIsk Acess","status":"error"}]

  constructor() { }

  ngOnInit() {
    
  }

  expand(){
    //console.log(this.table.expanded)
    this.expanded=!this.expanded;
  }

}
