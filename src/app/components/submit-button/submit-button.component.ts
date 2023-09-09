import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="submit"
      class="text-white font-bold py-1 px-2 mr-2 rounded bg-green-600"
    >
      Salvar
    </button>
  `,
})
export class SubmitButtonComponent {}
