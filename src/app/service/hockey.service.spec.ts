import { TestBed } from '@angular/core/testing';

import { HockeyService } from './hockey.service';

describe('HockeyService', () => {
  let service: HockeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HockeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
