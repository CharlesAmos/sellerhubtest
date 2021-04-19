import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { Ten12Component } from './ten12/ten12.component';

const routes: Routes = [
  {
    path: '',
    component: Ten12Component
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard | Hub',
    },
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
