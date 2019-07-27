import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRouting } from './routing/dashboard-routing.module';
import { DashboardCardSpawnerComponent } from './cards/dashboards-card-spawner/dashboards-card-spawner.component';
import { DashboardUserComponent } from './cards/dashboard-user/dashboard-user.component'
import { DashboardCardsService } from './services/dashboard-card.service'
import { HttpClientModule } from '@angular/common/http';

//Material
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AddNewComponentComponent } from './add-new-component/add-new-component.component';
import { FormsModule} from '@angular/forms'



@NgModule({
  declarations: [DashboardComponent, DashboardCardSpawnerComponent, DashboardUserComponent, AddNewComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    FlexLayoutModule,
    DashboardRouting,
    HttpClientModule
  ],
  exports: [ DashboardRouting ],
  providers: [ DashboardCardsService ]
})
export class DashboardModule { }
