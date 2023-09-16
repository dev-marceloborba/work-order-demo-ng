import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EWorkOrderStatus, WorkOrder } from '../../models/work-order.model';

@Component({
  selector: 'app-work-order-status',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="flex justify-center items-center w-32 h-4 bg-blue-400 rounded text-white  font-semibold py-4 px-2"
  >
    {{ getDescription() }}
  </div>`,
})
export class WorkOrderStatusComponent {
  @Input()
  status!: EWorkOrderStatus;

  getDescription() {
    switch (this.status) {
      case EWorkOrderStatus.IN_EXECUTION:
        return 'Em execução';
      case EWorkOrderStatus.FINISHED:
        return 'Finalizada';
      case EWorkOrderStatus.LATE:
        return 'Em atraso';
    }
  }
}
