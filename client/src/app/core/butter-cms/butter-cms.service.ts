import { Injectable } from '@angular/core';
import Butter from 'buttercms';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { EnvironmentVariablesService } from '@src/app/core/environment-variables.service';
import { PromotionalPage } from '@src/app/types';

@Injectable({
  providedIn: 'root',
})
export class ButterCMSService {
  private butter = Butter(this.environmentVariablesService.butterCMSToken);
  private promotionalPageType = 'storefront';

  constructor(
    private environmentVariablesService: EnvironmentVariablesService
  ) {}

  getPromotionalPages(
    pageSize: number,
    page: number,
    locale: string
  ): Observable<{ data: PromotionalPage[]; meta: { count: number } }> {
    return from(
      this.butter.page.list(this.promotionalPageType, {
        locale,
        page_size: pageSize,
        page,
      })
    ).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  getPromotionalPageData(
    slug: string,
    locale: string
  ): Observable<PromotionalPage> {
    return from(
      this.butter.page.retrieve(this.promotionalPageType, slug, { locale })
    ).pipe(
      map((response) => {
        return response.data.data;
      })
    );
  }
}
