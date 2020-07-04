import { TestBed } from '@angular/core/testing';

import { ElectionsDetailService } from './elections-detail.service';

describe('ElectionsDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionsDetailService = TestBed.get(ElectionsDetailService);
    expect(service).toBeTruthy();
  });
});
