import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { PromotionalProduct } from '@src/app/types';

@Component({
  selector: 'page-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: PromotionalProduct;

  constructor() {}

  ngOnInit(): void {}
}
