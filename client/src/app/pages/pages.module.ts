import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { PagesRoutingModule } from './pages-routing.module';
import { PromotionalPageComponent } from './promotional-page/promotional-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product/product.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PromotionalPageComponent,
    ProductComponent,
    PagesListComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    SharedModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
