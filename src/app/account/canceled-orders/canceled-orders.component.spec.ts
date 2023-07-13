import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledOrdersComponent } from './canceled-orders.component';

describe('CanceledOrdersComponent', () => {
  let component: CanceledOrdersComponent;
  let fixture: ComponentFixture<CanceledOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanceledOrdersComponent]
    });
    fixture = TestBed.createComponent(CanceledOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
