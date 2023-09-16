import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrder } from '../../models/work-order.model';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { WorkOrderFormComponent } from '../work-order-form/work-order-form.component';
import { WorkOrderService } from '../../services/work-order.service';
import { WorkOrderStatusComponent } from '../work-order-status/work-order-status.component';
import { ButtonDirective } from 'src/app/directives/button/button.directive';

@Component({
  selector: 'app-work-orders-table',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    WorkOrderFormComponent,
    WorkOrderStatusComponent,
    ButtonDirective,
  ],
  template: `
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Equipamento</th>
          <th>Data de criação</th>
          <th>Data alvo</th>
          <th>Data Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let workOrder of workOrders">
          <td>{{ workOrder.id }}</td>
          <td>{{ workOrder.equipmentName }}</td>
          <td>{{ workOrder.createdAt | date }}</td>
          <td>{{ workOrder.target | date }}</td>
          <td>
            <app-work-order-status [status]="workOrder.workOrderStatus" />
          </td>
          <td>
            <button mButton (click)="handleOpenModal(workOrder)">Editar</button>
            <button mButton [color]="'danger'">Excluir</button>
          </td>
        </tr>
      </tbody>
      <app-modal
        title="Editar ordem de serviço"
        [isOpen]="isModalOpen"
        (onClose)="closeModal()"
      >
        <app-work-order-form [workOrder]="selectedWorkOrder" />
      </app-modal>
    </table>
  `,
})
export class WorkOrdersTableComponent implements OnInit {
  constructor(private workOrderService: WorkOrderService) {}

  isModalOpen = false;
  workOrders: WorkOrder[] = [];
  selectedWorkOrder?: WorkOrder;

  ngOnInit(): void {
    this.workOrderService.data$.subscribe({
      next: (workOrders) => {
        this.workOrders = workOrders;
      },
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
