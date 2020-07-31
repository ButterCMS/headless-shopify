import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule,
  ],
})
export class MainModule {}
