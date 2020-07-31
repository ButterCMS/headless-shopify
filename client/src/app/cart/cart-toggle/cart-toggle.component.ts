import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '@src/app/core/cart/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '@src/app/types';
import { ShopifyService } from '@src/app/core/shopify/shopify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-cart-toggle',
  templateUrl: './cart-toggle.component.html',
  styleUrls: ['./cart-toggle.component.scss'],
})
export class CartToggleComponent implements OnInit {
  cartProducts: Observable<CartItem>;

  constructor(
    private cartService: CartService,
    @Inject('windowObj') private window: Window
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
  }

  removeProductFromCart(varianceId: string): void {
    this.cartService.removeProduct(varianceId);
  }

  goToCheckout(): void {
    this.cartService.goToCheckout().subscribe((response) => {
      this.window.open(response.data.checkoutCreate.checkout.webUrl, '__blank');
    });
  }
}
