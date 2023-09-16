import { Pipe, PipeTransform } from '@angular/core';
import { EWorkOrderStatus } from '../models/work-order.model';

@Pipe({
  name: 'workOrderStatusLabel',
  standalone: true,
})
export class WorkOrderStatusLabelPipe implements PipeTransform {
  transform(value: EWorkOrderStatus): string {
    switch (value) {
      case EWorkOrderStatus.IN_EXECUTION:
        return 'Em execução';
      case EWorkOrderStatus.FINISHED:
        return 'Finalizada';
      case EWorkOrderStatus.LATE:
        return 'Em atraso';
    }
  }
}
