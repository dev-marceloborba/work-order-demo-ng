import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderInfoCardComponent } from './components/work-order-info-card/work-order-info-card.component';
import { WorkOrderStatisticsService } from '../work-orders/services/work-order-statistics.service';
import { WorkOrderStatistics } from '../work-orders/models/work-order-statistics.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WorkOrderInfoCardComponent],
  template: `<div>
    <h2 class="page-title">Dashboard</h2>
    <div
      *ngIf="!!workOrderStatistcs"
      class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div class="col-span-1">
        <app-work-order-info-card
          title="Ordens em execução"
          [value]="workOrderStatistcs.totalInExecution"
        />
      </div>
      <div class="col-span-1">
        <app-work-order-info-card
          title="Ordens concluídas"
          [value]="workOrderStatistcs.totalFinished"
        />
      </div>
      <div class="col-span-1">
        <app-work-order-info-card
          title="Ordens em atraso"
          [value]="workOrderStatistcs.totalLate"
        />
      </div>
    </div>
  </div> `,
})
export class DashboardComponent implements OnInit {
  constructor(private workOrderStatisticsService: WorkOrderStatisticsService) {}

  workOrderStatistcs!: WorkOrderStatistics;

  ngOnInit(): void {
    this.workOrderStatisticsService.getStatistics().subscribe({
      next: (value) => {
        this.workOrderStatistcs = value;
      },
    });
  }
}
