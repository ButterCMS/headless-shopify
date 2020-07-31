import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { PromotionalPage } from '@src/app/types';
import { ButterCMSService } from '@src/app/core/butter-cms/butter-cms.service';

@Injectable({
  providedIn: 'root',
})
export class PromotionalPageResolverService
  implements Resolve<PromotionalPage> {
  constructor(private butterCMSService: ButterCMSService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PromotionalPage> {
    const slug = route.paramMap.get('slug');
    const locale = route.paramMap.get('locale');
    return this.butterCMSService.getPromotionalPageData(slug, locale);
  }
}
