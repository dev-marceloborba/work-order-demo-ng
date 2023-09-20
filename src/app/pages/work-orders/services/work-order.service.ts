import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkOrder } from '../models/work-order.model';
import { CreateWorkOrderModel } from '../models/create-work-order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:5114';

  private dataSubject = new BehaviorSubject<WorkOrder[]>([]);
  data$ = this.dataSubject.asObservable();

  findAll() {
    this.httpClient
      .get<WorkOrder[]>(`${this.baseUrl}/api/v1/work-orders`)
      .subscribe({
        next: (workOrders) => this.dataSubject.next(workOrders),
      });
  }

  create(workOrder: CreateWorkOrderModel) {
    this.httpClient
      .post(`${this.baseUrl}/api/v1/work-orders`, workOrder)
      .subscribe({
        next: () => this.findAll(),
      });
  }

  save(workOrder: Partial<WorkOrder>) {
    // update
    if (workOrder.id) {
      this.httpClient
        .put(`${this.baseUrl}/api/v1/work-orders/${workOrder.id}`, workOrder)
        .subscribe({
          next: () => this.findAll(),
        });
    }
    // create
    else {
      this.httpClient
        .post(`${this.baseUrl}/api/v1/work-orders`, workOrder)
        .subscribe({
          next: () => this.findAll(),
        });
    }
  }

  findById(id: number) {
    return this.httpClient.get<WorkOrder>(
      `${this.baseUrl}/api/v1/work-orders/${id}`
    );
  }

  remove(id: number) {
    this.httpClient
      .delete(`${this.baseUrl}/api/v1/work-orders/${id}`)
      .subscribe({
        next: () => this.findAll(),
      });
  }

  finishOrder(id: number) {
    this.httpClient
      .put(`${this.baseUrl}/api/v1/work-orders/finish/${id}`, {})
      .subscribe({
        next: () => this.findAll(),
      });
  }
}
