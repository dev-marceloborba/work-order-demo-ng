import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<main class="flex min-h-screen">
    <p>Bem vindo a uma aplicação Demo de ordem de serviços</p>
  </main>`,
})
export class HomeComponent {}
