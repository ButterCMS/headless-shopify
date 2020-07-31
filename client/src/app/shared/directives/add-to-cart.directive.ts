import { Directive, Input, HostListener } from '@angular/core';
import { CartService } from '@src/app/core/cart/cart.service';
import { Product, ProductVariant } from '@src/app/types';

@Directive({
  selector: '[sharedAddToCart]',
})
export class AddToCartDirective {
  @Input('sharedAddToCart') productVariant: ProductVariant;
  @Input() productHandle: string;
  @Input() productTitle: string;
  @Input() productQuantity: number;

  @HostListener('click', ['$event']) onClick(): void {
    this.cartService.addToCart(
      this.productHandle,
      this.productTitle,
      this.productVariant,
      this.productQuantity
    );
  }

  constructor(private cartService: CartService) {}
}
