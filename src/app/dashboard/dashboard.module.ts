import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    OverviewComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
