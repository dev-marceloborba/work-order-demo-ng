import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersTableComponent } from './work-orders-table.component';

describe('WorkOrdersTableComponent', () => {
  let component: WorkOrdersTableComponent;
  let fixture: ComponentFixture<WorkOrdersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorkOrdersTableComponent]
    });
    fixture = TestBed.createComponent(WorkOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
