import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrdersTableComponent } from './components/work-orders-table/work-orders-table.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { WorkOrderFormComponent } from './components/work-order-form/work-order-form.component';
import { ButtonDirective } from 'src/app/directives/button/button.directive';

@Component({
  selector: 'app-work-orders',
  standalone: true,
  imports: [
    CommonModule,
    WorkOrdersTableComponent,
    ModalComponent,
    WorkOrderFormComponent,
    ButtonDirective,
  ],
  template: `<div>
    <div class="flex items-center justify-between mb-2">
      <h2 class="page-title">Ordens de serviço</h2>
      <button mButton (onClick)="openModal()">Nova ordem de serviço</button>
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
