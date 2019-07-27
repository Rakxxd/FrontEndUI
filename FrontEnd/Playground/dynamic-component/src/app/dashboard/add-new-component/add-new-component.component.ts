import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../cards/dashboard-card'
import { DashboardCardsService} from '../services/dashboard-card.service';
import { DashboardUserComponent } from '../cards/dashboard-user/dashboard-user.component';
import { ComponentsModelc } from '../../model/coponents-model'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-add-new-component',
  templateUrl: './add-new-component.component.html',
  styleUrls: ['./add-new-component.component.css']
})
export class AddNewComponentComponent implements OnInit {

  dashboardCard: DashboardCard;
  compmodl: ComponentsModelc;
 

  constructor(private service: DashboardCardsService
    ) { }

  ngOnInit() {
    this.compmodl = new ComponentsModelc();
    
  }

 // let value =DashboardCard._input

  
  saveContact() {
    console.log("insid button");
    this.service.addCard({ 
      
      input:
    {
      id: {
        key: "",
        value :"8"
      },
      name: {
        key: "name",
        value: this.compmodl.name
      },
      routerLink: {
        key: "roter",
        value: '/user'
      },
      iconClass: {
        key: "",
        value: ''
      },        
      color: {
        key: "",
        value: this.compmodl.color
      }
    }, component:{
      names:DashboardUserComponent,
    },
    services:{
      provide: "",
      useClass: "",
      deps:[]

    }
  } )

}
}
