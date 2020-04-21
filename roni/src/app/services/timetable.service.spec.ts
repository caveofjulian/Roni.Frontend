/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimetableService } from './timetable.service';

describe('Service: Timetable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimetableService]
    });
  });

  it('should ...', inject([TimetableService], (service: TimetableService) => {
    expect(service).toBeTruthy();
  }));
});
