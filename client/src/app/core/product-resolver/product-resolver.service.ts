import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';

import { ProductData } from '@src/app/types';
import { ShopifyService } from '@src/app/core/shopify/shopify.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService
  implements Resolve<ApolloQueryResult<ProductData>> {
  constructor(private shopifyService: ShopifyService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ApolloQueryResult<ProductData>> {
    const handle = route.paramMap.get('productHandle');
    return this.shopifyService.getProduct(handle);
  }
}
