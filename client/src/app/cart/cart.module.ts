import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CartToggleComponent } from './cart-toggle/cart-toggle.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartToggleComponent],
  exports: [CartToggleComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    SharedModule,
  ],
})
export class CartModule {}
