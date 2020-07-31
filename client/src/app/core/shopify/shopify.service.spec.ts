import { TestBed } from '@angular/core/testing';

import { ShopifyService } from './shopify.service';

describe('ShopifyService', () => {
  let service: ShopifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
