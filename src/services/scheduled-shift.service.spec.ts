import { TestBed } from '@angular/core/testing';

import { ScheduledShiftService } from './scheduled-shift.service';

describe('ScheduledShiftService', () => {
  let service: ScheduledShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
