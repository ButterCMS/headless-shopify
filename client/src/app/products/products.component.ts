import { Component, OnInit } from '@angular/core';
import { ShopifyService } from '../core/shopify/shopify.service';
import { ApolloQueryResult } from 'apollo-client';
import { Products } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Observable<ApolloQueryResult<Products>>;

  constructor(private shopifyService: ShopifyService) {}

  ngOnInit(): void {
    this.products = this.shopifyService.getAllProducts();
  }
}
