import {Component, OnInit, OnChanges} from '@angular/core';
import {DashboardCard} from '../cards/dashboard-card';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DashboardCardsService} from '../services/dashboard-card.service';
//import {ObservableMedia} from '@angular/flex-layout';

import { DashboardUserComponent } from '../cards/dashboard-user/dashboard-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [DashboardUserComponent]
})
export class DashboardComponent implements OnInit, OnChanges {

  cards: DashboardCard[] = [];
  cardsArray: DashboardCard[] = [];
  newCard : DashboardCard[] = [];
  
  

  constructor(private cardsService: DashboardCardsService,
              ) {
    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });
    //this.cardsService.getAllCards().subscribe( data => this.cardsArray=data);
      
  }

  ngOnChanges(){
    
  }

  ngOnInit() {
    /* Grid column map */    
    this.createCards();
    this.cardsService.deleteCard()
     .subscribe( data => data.forEach((singleCard)=>this.cardsArray.push(
       new DashboardCard({
        id: { 
          key: eval("this.cardsArray"),
          value :"8"
        },
        name: {
          key: DashboardCard.metadata.NAME,
          value: singleCard.input.name.value
        },
        routerLink: {
          key: DashboardCard.metadata.ROUTERLINK,
          value: '/user'
        },
        iconClass: {
          key: DashboardCard.metadata.ICONCLASS,
          value: ''
        },        
        color: {
          key: DashboardCard.metadata.COLOR,
          value: singleCard.input.name.value
        }
      }, {
        names:DashboardUserComponent,
      },
      {
        provide: "DashboardCardsService",
        useClass: DashboardCardsService,
        deps:[HttpClient]

      }
      
    ))));
  }

  createCards(): void {
    console.log(this.cardsArray);

       
  }

}
