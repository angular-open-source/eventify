import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateEventFormComponent } from './rate-event-form.component';

describe('RateEventFormComponent', () => {
  let component: RateEventFormComponent;
  let fixture: ComponentFixture<RateEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateEventFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
