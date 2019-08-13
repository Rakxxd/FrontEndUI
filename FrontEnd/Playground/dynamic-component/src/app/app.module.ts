import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ParsingModule } from './parsing/parsing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    FlexLayoutModule,
    ParsingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
