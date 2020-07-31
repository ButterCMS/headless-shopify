import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionalPageComponent } from './promotional-page/promotional-page.component';
import { PromotionalPageResolverService } from '@src/app/core/promotional-page-resolver/promotional-page-resolver.service';
import { PromotionalPageMetaResolverService } from '@src/app/core/promotional-page-meta-resolver/promotional-page-meta-resolver.service';
import { PagesListComponent } from './pages-list/pages-list.component';

const routes: Routes = [
  {
    path: ':locale',
    component: PagesListComponent,
    data: {
      meta: {
        title: 'Promotional pages',
        description: 'List of promotional pages fetched from ButterCMS',
      },
    },
  },
  {
    path: '',
    redirectTo: './en',
  },
  {
    path: ':locale/:slug',
    component: PromotionalPageComponent,
    resolve: {
      page: PromotionalPageResolverService,
      meta: PromotionalPageMetaResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
