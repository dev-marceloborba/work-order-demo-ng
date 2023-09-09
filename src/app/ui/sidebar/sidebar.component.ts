import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<aside class="w-64 min-h-screen bg-gray-800 text-white">
    <nav class="mt-0">
      <ul>
        <li>
          <a
            routerLink="/dashboard"
            routerLinkActive="active"
            class="block px-4 py-2 text-gray-300 hover:bg-gray-600 rounded-lg"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            routerLink="/work-orders"
            routerLinkActive="active"
            class="block px-4 py-2 text-gray-300 hover:bg-gray-600 rounded-lg"
            >Ordens de serviço</a
          >
        </li>
      </ul>
    </nav>
  </aside> `,
  styleUrls: ['./sidebar.styles.scss'],
})
export class SidebarComponent {}
