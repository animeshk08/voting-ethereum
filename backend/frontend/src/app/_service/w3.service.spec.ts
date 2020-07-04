import { TestBed } from '@angular/core/testing';

import { W3Service } from './w3.service';

describe('W3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: W3Service = TestBed.get(W3Service);
    expect(service).toBeTruthy();
  });
});
