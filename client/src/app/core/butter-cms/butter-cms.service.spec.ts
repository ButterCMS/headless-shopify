import { TestBed } from '@angular/core/testing';

import { ButterCMSService } from './butter-cms.service';

describe('ButterCMSService', () => {
  let service: ButterCMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButterCMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
