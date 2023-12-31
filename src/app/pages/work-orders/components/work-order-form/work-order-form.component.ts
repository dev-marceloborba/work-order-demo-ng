import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from 'src/app/components/input/input.component';
import { SubmitButtonComponent } from 'src/app/components/submit-button/submit-button.component';
import { WorkOrder } from '../../models/work-order.model';
import { WorkOrderService } from '../../services/work-order.service';

@Component({
  selector: 'app-work-order-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    SubmitButtonComponent,
  ],
  template: `
    <form
      [formGroup]="workOrderForm"
      (ngSubmit)="onSubmit()"
      novalidate
      autocomplete="off"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <app-input
        label="Nome do equipamento"
        name="equipmentName"
        formControlName="equipmentName"
      />
      <app-input
        label="Descrição"
        name="description"
        formControlName="description"
      />
      <app-input
        label="Data alvo"
        name="target"
        formControlName="target"
        type="date"
      />
      <app-submit-button [disabled]="isValid()" />
    </form>
  `,
})
export class WorkOrderFormComponent implements OnChanges {
  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService
  ) {}

  @Input()
  workOrder?: WorkOrder;

  workOrderForm = this.fb.group({
    equipmentName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.min(2),
        Validators.max(50),
      ]),
    ],
    description: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(50)]),
    ],
    target: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (this.workOrder) {
      this.workOrderForm.patchValue({
        equipmentName: this.workOrder?.equipmentName,
        description: this.workOrder?.description,
        target: this.formatDate(this.workOrder.target.toString()),
      });
    }
  }

  isValid() {
    return this.workOrderForm.valid;
  }

  onSubmit() {
    this.workOrderService.save({
      id: this.workOrder?.id,
      workOrderStatus: this.workOrder?.workOrderStatus,
      equipmentName: this.workOrderForm.get('equipmentName')?.value!,
      description: this.workOrderForm.get('description')?.value!,
      target: new Date(this.workOrderForm.get('target')?.value!),
    });
  }

  private formatDate(date: string) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
