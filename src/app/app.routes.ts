import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkOrdersComponent } from './pages/work-orders/work-orders.component';
import { WorkOrderService } from './pages/work-orders/services/work-order.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'work-orders',
    component: WorkOrdersComponent,
    providers: [WorkOrderService],
  },
];
