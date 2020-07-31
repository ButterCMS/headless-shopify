import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductResolverService } from '@src/app/core/product-resolver/product-resolver.service';
import { ProductMetaResolverService } from '@src/app/core/product-meta-resolver/product-meta-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: { meta: { title: 'Products', description: 'List of products' } },
  },
  {
    path: ':productHandle',
    component: ProductComponent,
    resolve: {
      product: ProductResolverService,
      meta: ProductMetaResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
