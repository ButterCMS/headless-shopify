import { Component, OnInit } from '@angular/core';
import { ShopifyService } from './core/shopify/shopify.service';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  storeInfo: Observable<ApolloQueryResult<{ shop: { name: string } }>>;

  private appName = 'Shopify storefront with ButterCMS';
  private defaultKeywords =
    'angular, butterCMS, shopify, storefront, storefront-api';
  private defaultDescription =
    'Shopify StoreFront developed with Angular and ButterCMS';

  constructor(
    private shopifyService: ShopifyService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.storeInfo = this.shopifyService.getShopData();
    this.setPageMetaTags();
  }

  private setPageMetaTags(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe(
        (data: {
          meta: { title: string; description: string; keywords: string };
          hideMenu: boolean;
        }) => {
          const title = data && data.meta ? data.meta.title : '';
          this.titleService.setTitle(
            `${title ? `${title} | ` : ''}${this.appName}`
          );

          this.metaService.addTags([
            {
              name: 'keywords',
              content: `${this.defaultKeywords}${
                data.meta && data.meta.keywords ? `, ${data.meta.keywords}` : ''
              }`,
            },
            {
              name: 'description',
              content:
                data.meta && data.meta.description
                  ? data.meta.description
                  : this.defaultDescription,
            },
            { name: 'robots', content: 'index, follow' },
          ]);
        }
      );
  }
}
