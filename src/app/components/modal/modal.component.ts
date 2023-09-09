import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    *ngIf="isOpen"
    class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white w-96 p-4 rounded shadow-lg">
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <ng-content />
      <div class="mt-4 flex justify-end">
        <button
          (click)="onClose.emit()"
          class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>`,
})
export class ModalComponent {
  @Input()
  title = '';

  @Input()
  isOpen = false;

  @Output()
  onClose = new EventEmitter<void>();
}
