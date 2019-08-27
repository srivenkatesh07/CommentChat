import { TestBed } from '@angular/core/testing';

import { LoglistService } from './loglist.service';

describe('LoglistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoglistService = TestBed.get(LoglistService);
    expect(service).toBeTruthy();
  });
});
