import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewThumbComponent } from './review-thumb.component';

describe('ReviewThumbComponent', () => {
  let component: ReviewThumbComponent;
  let fixture: ComponentFixture<ReviewThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewThumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
