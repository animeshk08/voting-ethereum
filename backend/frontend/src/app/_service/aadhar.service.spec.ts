import { TestBed } from '@angular/core/testing';

import { AadharService } from './aadhar.service';

describe('AadharService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AadharService = TestBed.get(AadharService);
    expect(service).toBeTruthy();
  });
});
