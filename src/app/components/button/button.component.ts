import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="text-white font-bold py-1 px-2 mr-2 rounded"
      [ngClass]="getColor()"
      (click)="onClick.emit()"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Input() color: 'primary' | 'danger' = 'primary';
  @Output() onClick = new EventEmitter<void>();

  getColor(): string {
    switch (this.color) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-700';
      case 'danger':
        return 'bg-red-500 hover:bg-red-700';
      default:
        return '';
    }
  }
}
