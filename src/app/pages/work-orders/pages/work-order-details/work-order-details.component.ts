import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { WorkOrderService } from '../../services/work-order.service';
import { Observable } from 'rxjs';
import { WorkOrder } from '../../models/work-order.model';
import { WorkOrderStatusLabelPipe } from '../../pipes/work-order-status-label.pipe';

@Component({
  selector: 'app-work-order-details',
  standalone: true,
  imports: [CommonModule, RouterModule, WorkOrderStatusLabelPipe],
  template: `<div>
    <h2>Detalhes da ordem</h2>
    <div *ngIf="workOrder$ | async as workOrder">
      <p>{{ workOrder.equipmentName }}</p>
      <p>{{ workOrder.description }}</p>
      <p>{{ workOrder.createdAt | date }}</p>
      <p>{{ workOrder.target | date }}</p>
      <p>{{ workOrder.workOrderStatus | workOrderStatusLabel }}</p>
    </div>
  </div> `,
})
export class WorkOrderDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workOrderService: WorkOrderService
  ) {}

  workOrder$ = new Observable<WorkOrder>();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.workOrder$ = this.workOrderService.findById(id);
  }
}
