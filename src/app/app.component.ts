import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `<div class="flex flex-row">
    <app-sidebar />
    <main class="p-8 flex-1">
      <router-outlet />
    </main>
  </div>`,
})
export class AppComponent {
  title = 'work-order-demo-ng';
}
