import { TestBed } from '@angular/core/testing';

import { SelfieListService } from './selfie-list.service';

describe('SelfieListService', () => {
  let service: SelfieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfieListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
