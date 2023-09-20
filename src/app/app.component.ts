import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { AuthenticationService } from './pages/login/services/authentication.service';

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
export class AppComponent implements OnInit {
  title = 'work-order-demo-ng';

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.retrieveFromLocalStorage();
  }
}
