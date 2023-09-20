import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkOrdersComponent } from './pages/work-orders/work-orders.component';
import { WorkOrderService } from './pages/work-orders/services/work-order.service';
import { WorkOrderDetailsComponent } from './pages/work-orders/pages/work-order-details/work-order-details.component';
import { WorkOrderStatisticsService } from './pages/work-orders/services/work-order-statistics.service';
import { LoginComponent } from './pages/login/login.component';
// import { AuthenticationService } from './pages/login/services/authentication.service';
import { authGuard } from './pages/login/guards/auth.guard';
import { authenticatedGuard } from './pages/login/guards/authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    providers: [],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    providers: [WorkOrderStatisticsService],
    canActivate: [authGuard],
  },
  {
    path: 'work-orders',
    component: WorkOrdersComponent,
    providers: [WorkOrderService],
    canActivate: [authGuard],
  },
  {
    path: 'work-orders/:id',
    component: WorkOrderDetailsComponent,
    providers: [WorkOrderService],
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authenticatedGuard],
  },
];
