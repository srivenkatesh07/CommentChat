import { TestBed } from '@angular/core/testing';

import { UserdatalistService } from './userdatalist.service';

describe('UserdatalistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdatalistService = TestBed.get(UserdatalistService);
    expect(service).toBeTruthy();
  });
});
