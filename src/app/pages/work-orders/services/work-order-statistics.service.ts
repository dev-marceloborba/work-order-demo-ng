import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkOrderStatistics } from '../models/work-order-statistics.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderStatisticsService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:5114';

  private dataSubject = new BehaviorSubject<WorkOrderStatistics>({
    totalFinished: 0,
    totalInExecution: 0,
    totalLate: 0,
  });
  data$ = this.dataSubject.asObservable();

  public getStatistics() {
    this.httpClient
      .get<WorkOrderStatistics>(`${this.baseUrl}/api/v1/work-orders/statistics`)
      .subscribe({
        next: (workOrderStatistcs) => this.dataSubject.next(workOrderStatistcs),
      });
  }
}
