import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderInfoCardComponent } from './components/work-order-info-card/work-order-info-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WorkOrderInfoCardComponent],
  template: `<div>
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="col-span-1">
        <app-work-order-info-card title="Ordens em execução" [value]="1" />
      </div>
      <div class="col-span-1">
        <app-work-order-info-card title="Ordens concluídas" [value]="3" />
      </div>
      <div class="col-span-1">
        <app-work-order-info-card title="Ordens em atraso" [value]="2" />
      </div>
    </div>
  </div> `,
})
export class DashboardComponent {}
