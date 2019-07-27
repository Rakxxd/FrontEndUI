import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardCard} from '../dashboard-card';
import { DashboardCardsService} from '../../services/dashboard-card.service';
import { HttpClient } from '@angular/common/http';
import { DashboardUserComponent } from '../dashboard-user/dashboard-user.component';
import { InjectionToken} from '@angular/core';


@Component({
  selector: 'app-dashboard-cards-spawner',
  templateUrl: './dashboards-card-spawner.component.html',
  styleUrls: ['./dashboards-card-spawner.component.css'],
  entryComponents: [DashboardUserComponent]
})
export class DashboardCardSpawnerComponent implements OnInit {
  @ViewChild('spawn', {read: ViewContainerRef, static:true}) container: ViewContainerRef;

  
  constructor(private resolver: ComponentFactoryResolver, private dash : DashboardCard
    
    ) {
      
    //this.dboar = new DashboardCard({},{},{}):
  }



  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }
    let inputProviders =[    
       {provide: this.dash.input.id.key, useValue: data.input.id.value, deps: []},
       {provide: DashboardCard.metadata.NAME, useValue: data.input.name.value, deps: []},
       //{provide: data.input.id.key['input']['name']['key'], useValue: data.input.name.value, deps: []},
       {provide: DashboardCard.metadata.ROUTERLINK, useValue: data.input.routerLink.value, deps: []},
       {provide: DashboardCard.metadata.ICONCLASS, useValue: data.input.iconClass.value, deps: []},
       {provide: DashboardCard.metadata.COLOR , useValue: data.input.color.value, deps: []}
     
    
    ] 
    console.log(data);
    console.log();
    //console.log(eval(nameData));
    

    
    


    

    inputProviders = inputProviders.concat(data.services);


    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(DashboardUserComponent);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }

  ngOnInit() {
  }

}
