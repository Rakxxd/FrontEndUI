import {Component, Injector, OnInit} from '@angular/core';
import {DashboardCard} from '../dashboard-card';
import {AbstractDashboardCard} from '../abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent extends AbstractDashboardCard implements OnInit {

  mysrvice: any;
  cards:DashboardCard;

  constructor( injector: Injector) {
    super(injector.get(DashboardCard.metadata.ID),
      injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLOR));

      this.mysrvice = injector.get("DashboardCardsService");
      
  }

  ngOnInit() {

    
  }

 deleteCard(){
    
   this.mysrvice.deleteCard(this.id);
  }

  

}
