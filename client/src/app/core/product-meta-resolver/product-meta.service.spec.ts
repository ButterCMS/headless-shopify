import { TestBed } from '@angular/core/testing';

import { ProductMetaResolverService } from './product-meta-resolver.service';

describe('ProductMetaResolverService', () => {
  let service: ProductMetaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMetaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
