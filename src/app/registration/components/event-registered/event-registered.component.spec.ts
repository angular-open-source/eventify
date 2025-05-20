import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegisteredComponent } from './event-registered.component';

describe('EventRegisteredComponent', () => {
  let component: EventRegisteredComponent;
  let fixture: ComponentFixture<EventRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegisteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
