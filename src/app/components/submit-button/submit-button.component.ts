import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [disabled]="!disabled"
      type="submit"
      class="text-white font-bold py-1 px-2 mr-2 rounded"
      [ngClass]="disabled ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'"
    >
      Salvar
    </button>
  `,
})
export class SubmitButtonComponent {
  @Input()
  disabled = false;
}
