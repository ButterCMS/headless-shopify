import { TestBed } from '@angular/core/testing';

import { PromotionalPageMetaResolverService } from './promotional-page-meta-resolver.service';

describe('PromotionalPageMetaResolverService', () => {
  let service: PromotionalPageMetaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionalPageMetaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
