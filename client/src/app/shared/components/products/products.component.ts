import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { Product } from '@src/app/types';

@Component({
  selector: 'shared-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit(): void {}
}
