import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpandableRowComponent } from './expandable-row/expandable-row.component';
import { EntityComponent } from './entity/entity.component';
import { TablesComponent } from './tables/tables.component';


const routes: Routes = [
  {
    path: 'table',
    component: ExpandableRowComponent
  },
  
];


@NgModule({
  declarations: [ExpandableRowComponent, EntityComponent, TablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ParsingModule { }
