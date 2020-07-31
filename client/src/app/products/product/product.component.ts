import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductData, ProductVariant } from '@src/app/types';
import { CartService } from '@src/app/core/cart/cart.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Observable<ApolloQueryResult<ProductData>>;
  productQuantity: { [variantId: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product = this.route.data.pipe(
      map((data: { product: ApolloQueryResult<ProductData> }) => {
        return data.product;
      })
    );
  }

  addToCart(handle: string, title: string, variant: ProductVariant): void {
    this.cartService.addToCart(handle, title, variant, 1);
  }

  onChangedItemNumber(variantId: string, productQuantity: number): void {
    this.productQuantity[variantId] = productQuantity;
  }
}
