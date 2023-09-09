import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-order-info-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-4 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
      <div class="text-4xl font-bold text-center">{{ value }}</div>
    </div>
  `,
})
export class WorkOrderInfoCardComponent {
  @Input()
  title = '';

  @Input()
  value = 0;
}
