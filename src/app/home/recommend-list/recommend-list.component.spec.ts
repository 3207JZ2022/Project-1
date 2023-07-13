import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendListComponent } from './recommend-list.component';

describe('RecommendListComponent', () => {
  let component: RecommendListComponent;
  let fixture: ComponentFixture<RecommendListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendListComponent]
    });
    fixture = TestBed.createComponent(RecommendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
