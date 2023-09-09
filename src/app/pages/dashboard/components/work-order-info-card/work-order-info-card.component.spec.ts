import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderInfoCardComponent } from './work-order-info-card.component';

describe('WorkOrderInfoCardComponent', () => {
  let component: WorkOrderInfoCardComponent;
  let fixture: ComponentFixture<WorkOrderInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WorkOrderInfoCardComponent]
    });
    fixture = TestBed.createComponent(WorkOrderInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
