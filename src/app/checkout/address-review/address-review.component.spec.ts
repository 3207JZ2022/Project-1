import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressReviewComponent } from './address-review.component';

describe('AddressReviewComponent', () => {
  let component: AddressReviewComponent;
  let fixture: ComponentFixture<AddressReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressReviewComponent]
    });
    fixture = TestBed.createComponent(AddressReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
