import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="show"
      class="absolute top-0 left-0 h-screen w-screen opacity-60 bg-black flex items-center justify-center"
    >
      <div class="flex items-center justify-center space-x-2 animate-pulse">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  `,
})
export class LoaderComponent {
  @Input() show = false;
}
