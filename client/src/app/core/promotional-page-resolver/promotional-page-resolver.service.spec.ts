import { TestBed } from '@angular/core/testing';

import { PromotionalPageResolverService } from './promotional-page-resolver.service';

describe('PageResolverService', () => {
  let service: PromotionalPageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionalPageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
