import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetShippedComponent } from './not-yet-shipped.component';

describe('NotYetShippedComponent', () => {
  let component: NotYetShippedComponent;
  let fixture: ComponentFixture<NotYetShippedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotYetShippedComponent]
    });
    fixture = TestBed.createComponent(NotYetShippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
