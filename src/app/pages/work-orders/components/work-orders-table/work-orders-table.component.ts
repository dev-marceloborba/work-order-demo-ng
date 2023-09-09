import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrder } from '../../models/work-order.model';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { WorkOrderFormComponent } from '../work-order-form/work-order-form.component';
import { WorkOrderService } from '../../services/work-order.service';

@Component({
  selector: 'app-work-orders-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ModalComponent,
    WorkOrderFormComponent,
  ],
  template: `
    <table class="min-w-full border-collapse">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="py-2 px-4 text-left">Id</th>
          <th class="py-2 px-4 text-left">Equipamento</th>
          <th class="py-2 px-4 text-left">Data criação</th>
          <th class="py-2 px-4 text-left">Data alvo</th>
          <th class="py-2 px-4 text-left">Status</th>
          <th class="py-2 px-4 text-left">Ações</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr *ngFor="let workOrder of workOrders">
          <td class="py-2 px-4">{{ workOrder.id }}</td>
          <td class="py-2 px-4">{{ workOrder.equipmentName }}</td>
          <td class="py-2 px-4">{{ workOrder.createdAt }}</td>
          <td class="py-2 px-4">{{ workOrder.target }}</td>
          <td class="py-2 px-4">{{ workOrder.workOrderStatus }}</td>
          <td class="py-2 px-4">
            <app-button (onClick)="handleOpenModal(workOrder)"
              >Editar</app-button
            >
            <app-button [color]="'danger'">Excluir</app-button>
          </td>
        </tr>
      </tbody>
    </table>
    <app-modal
      title="Editar ordem de serviço"
      [isOpen]="isModalOpen"
      (onClose)="closeModal()"
    >
      <app-work-order-form [workOrder]="selectedWorkOrder" />
    </app-modal>
  `,
})
export class WorkOrdersTableComponent implements OnInit {
  constructor(private workOrderService: WorkOrderService) {}

  isModalOpen = false;
  workOrders: WorkOrder[] = [];
  selectedWorkOrder?: WorkOrder;

  ngOnInit(): void {
    this.workOrderService.data$.subscribe({
      next: (workOrders) => (this.workOrders = workOrders),
    });
    this.workOrderService.findAll();
  }

  handleOpenModal(workOrder: WorkOrder) {
    this.isModalOpen = true;
    this.selectedWorkOrder = workOrder;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
