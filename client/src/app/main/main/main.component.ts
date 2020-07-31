import { Component, OnInit } from '@angular/core';

import { ShopifyService } from '@src/app/core/shopify/shopify.service';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';

import { CollectionProducts } from '@src/app/types';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Observable<ApolloQueryResult<CollectionProducts>>;

  constructor(private shopifyService: ShopifyService) {}

  ngOnInit(): void {
    this.products = this.shopifyService.getProducts('fathers-day');
  }
}
