import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    data: { title: 'Dashboard | CRM' },
    children: [
      { path: '', redirectTo: 'dashboard' },
      {
        path: '',
        component: OverviewComponent,
        data: { title: 'Dashboard | Hub test | CRM' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
