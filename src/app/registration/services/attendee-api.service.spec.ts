import { TestBed } from '@angular/core/testing';

import { AttendeeApiService } from './attendee-api.service';

describe('AttendeeApiService', () => {
  let service: AttendeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
