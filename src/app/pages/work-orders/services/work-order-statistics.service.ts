import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkOrderStatistics } from '../models/work-order-statistics.model';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderStatisticsService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:5114';

  public getStatistics() {
    return this.httpClient.get<WorkOrderStatistics>(
      `${this.baseUrl}/api/v1/work-orders/statistics`
    );
  }
}
