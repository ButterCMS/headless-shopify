import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PromotionalPageResolverService } from '../promotional-page-resolver/promotional-page-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class PromotionalPageMetaResolverService
  implements Resolve<{ title: string; description: string }> {
  constructor(
    private promotionalPageResolverService: PromotionalPageResolverService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ title: string; description: string }> {
    return this.promotionalPageResolverService.resolve(route, state).pipe(
      map((promotionalPage) => {
        return {
          title: promotionalPage.fields.seo.title,
          description: promotionalPage.fields.seo.meta_description,
        };
      })
    );
  }
}
