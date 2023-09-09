import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrdersTableComponent } from './components/work-orders-table/work-orders-table.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { WorkOrderFormComponent } from './components/work-order-form/work-order-form.component';

@Component({
  selector: 'app-work-orders',
  standalone: true,
  imports: [
    CommonModule,
    WorkOrdersTableComponent,
    ButtonComponent,
    ModalComponent,
    WorkOrderFormComponent,
  ],
  template: `<div>
    <div class="flex items-center justify-between mb-2">
      <h2 class="font-bold text-2xl">Ordens de serviço</h2>
      <app-button (onClick)="openModal()">Nova ordem de serviço</app-button>
    </div>
    <app-work-orders-table />
    <app-modal
      title="Nova ordem de serviço"
      [isOpen]="isModalOpen"
      (onClose)="closeModal()"
    >
      <app-work-order-form />
    </app-modal>
  </div>`,
})
export class WorkOrdersComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
