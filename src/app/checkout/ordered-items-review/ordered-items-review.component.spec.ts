import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedItemsReviewComponent } from './ordered-items-review.component';

describe('OrderedItemsReviewComponent', () => {
  let component: OrderedItemsReviewComponent;
  let fixture: ComponentFixture<OrderedItemsReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderedItemsReviewComponent]
    });
    fixture = TestBed.createComponent(OrderedItemsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
