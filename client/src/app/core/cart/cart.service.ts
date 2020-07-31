import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductVariant, CartItem } from '@src/app/types';
import { ShopifyService } from '../shopify/shopify.service';
import { FetchResult } from 'apollo-link';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<CartItem>({});

  constructor(private shopifyService: ShopifyService) {}

  addToCart(
    handle: string,
    title: string,
    productVariant: ProductVariant,
    quantity: number
  ): void {
    const cart = this.cart.getValue();
    const productId = productVariant.id;
    this.cart.next({
      ...cart,
      [productId]: {
        title,
        product: productVariant,
        handle,
        quantity,
      },
    });
  }

  getCart(): Observable<CartItem> {
    return this.cart.asObservable();
  }

  removeProduct(variantId: string): void {
    const cart = { ...this.cart.getValue() };
    delete cart[variantId];
    this.cart.next(cart);
  }

  goToCheckout(): Observable<
    FetchResult<
      {
        checkoutCreate: {
          checkout: {
            id: string;
            webUrl: string;
          };
          checkoutUserErrors: {
            code: string;
            field: string;
            message: string;
          }[];
        };
      },
      Record<string, any>,
      Record<string, any>
    >
  > {
    const cart = this.cart.getValue();
    const lineItems: {
      variantId: string;
      quantity: number;
    }[] = Object.keys(cart).map((productId) => {
      return {
        variantId: cart[productId].product.id,
        quantity: cart[productId].quantity,
      };
    });
    return this.shopifyService.createCheckout(lineItems);
  }
}
