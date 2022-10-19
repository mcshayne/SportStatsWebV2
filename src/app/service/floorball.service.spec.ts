import { TestBed } from '@angular/core/testing';

import { FloorballService } from './floorball.service';

describe('FloorballService', () => {
  let service: FloorballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
