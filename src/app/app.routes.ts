import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkOrdersComponent } from './pages/work-orders/work-orders.component';
import { WorkOrderService } from './pages/work-orders/services/work-order.service';
import { WorkOrderDetailsComponent } from './pages/work-orders/pages/work-order-details/work-order-details.component';

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
  {
    path: 'work-orders/:id',
    component: WorkOrderDetailsComponent,
    providers: [WorkOrderService],
  },
];
