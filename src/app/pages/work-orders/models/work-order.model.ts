export interface WorkOrder {
  id: number;
  equipmentName: string;
  description: string;
  workOrderStatus: EWorkOrderStatus;
  createdAt: Date;
  target: Date;
}

export enum EWorkOrderStatus {
  IN_EXECUTION = 0,
  FINISHED = 1,
  LATE = 2,
}
