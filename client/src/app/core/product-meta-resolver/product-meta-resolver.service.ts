import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ProductResolverService } from '../product-resolver/product-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class ProductMetaResolverService
  implements Resolve<{ title: string; description: string }> {
  constructor(private productResolverService: ProductResolverService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ title: string; description: string }> {
    return this.productResolverService.resolve(route, state).pipe(
      map((product) => {
        return {
          title: product.data.productByHandle.title,
          description: product.data.productByHandle.description,
        };
      })
    );
  }
}
