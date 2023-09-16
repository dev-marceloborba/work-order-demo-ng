import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EWorkOrderStatus, WorkOrder } from '../../models/work-order.model';
import { WorkOrderStatusLabelPipe } from '../../pipes/work-order-status-label.pipe';

@Component({
  selector: 'app-work-order-status',
  standalone: true,
  imports: [CommonModule, WorkOrderStatusLabelPipe],
  template: `<div
    class="flex justify-center items-center w-32 h-4 bg-blue-400 rounded text-white  font-semibold py-4 px-2"
  >
    {{ status | workOrderStatusLabel }}
  </div>`,
})
export class WorkOrderStatusComponent {
  @Input()
  status!: EWorkOrderStatus;
}
