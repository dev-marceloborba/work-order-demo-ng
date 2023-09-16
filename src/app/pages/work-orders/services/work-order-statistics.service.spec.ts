import { TestBed } from '@angular/core/testing';

import { WorkOrderStatisticsService } from './work-order-statistics.service';

describe('WorkOrderStatisticsService', () => {
  let service: WorkOrderStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkOrderStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
