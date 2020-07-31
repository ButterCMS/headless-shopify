import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { RepeatPipe } from './pipes/repeat/repeat.pipe';
import { PriceRangePipe } from './pipes/price-range/price-range.pipe';
import { KeyNumPipe } from './pipes/key-num/key-num.pipe';
import { AddToCartDirective } from './directives/add-to-cart.directive';
import { ItemNumberPickerComponent } from './components/item-number-picker/item-number-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductsComponent,
    RepeatPipe,
    PriceRangePipe,
    KeyNumPipe,
    AddToCartDirective,
    ItemNumberPickerComponent,
  ],
  exports: [
    ProductsComponent,
    RepeatPipe,
    KeyNumPipe,
    AddToCartDirective,
    ItemNumberPickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SharedModule {}
