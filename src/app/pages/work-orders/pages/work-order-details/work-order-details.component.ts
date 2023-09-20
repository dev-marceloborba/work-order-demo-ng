import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkOrderService } from '../../services/work-order.service';
import { Observable, map } from 'rxjs';
import { WorkOrder } from '../../models/work-order.model';
import { WorkOrderStatusLabelPipe } from '../../pipes/work-order-status-label.pipe';
import { LoaderComponent } from 'src/app/ui/loader/loader.component';
import { ButtonDirective } from 'src/app/directives/button/button.directive';

@Component({
  selector: 'app-work-order-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    WorkOrderStatusLabelPipe,
    LoaderComponent,
    ButtonDirective,
  ],
  template: `<div class="bg-slate-200 rounded shadow py-4 px-2">
      <h2 class="page-title">Detalhes da ordem</h2>
      <div
        *ngIf="workOrder$ | async as workOrder"
        class="grid gap-4 grid-cols-2"
      >
        <div class="col-span-1">
          <div class="block">
            <h6>Equipamento</h6>
            <p>{{ workOrder.equipmentName }}</p>
          </div>
          <div class="block mt-2">
            <h6>Status</h6>
            <p>{{ workOrder.workOrderStatus | workOrderStatusLabel }}</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="block">
            <h6>Data de criação</h6>
            <p>{{ workOrder.createdAt | date }}</p>
          </div>
          <div class="block mt-2">
            <h6>Data alvo</h6>
            <p>{{ workOrder.target | date }}</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="block">
            <h6>Descrição</h6>
            <p>{{ workOrder.description }}</p>
          </div>
        </div>
      </div>
      <app-loader [show]="!workOrder$" />
    </div>
    <button mButton class="mt-2" (click)="finishOrder()">
      Finalizar ordem
    </button> `,
})
export class WorkOrderDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private workOrderService: WorkOrderService
  ) {}

  workOrder$ = new Observable<WorkOrder>();

  getWorkOrder(id: number) {
    this.workOrder$ = this.workOrderService.findById(id);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')!);
    this.getWorkOrder(id);
  }

  finishOrder() {
    this.workOrder$.pipe(map((value) => value.id)).subscribe({
      next: (id) => {
        this.workOrderService.finishOrder(id);
        this.getWorkOrder(id);
      },
    });
  }
}
