import { Pipe, PipeTransform } from '@angular/core';

import { PriceRange } from '@src/app/types';

@Pipe({
  name: 'priceRange',
})
export class PriceRangePipe implements PipeTransform {
  constructor() {}

  transform(priceRange: PriceRange): string {
    const minPrice = priceRange.minVariantPrice.amount;
    return `${
      priceRange.maxVariantPrice.amount !== priceRange.minVariantPrice.amount
        ? `${minPrice} - ${priceRange.maxVariantPrice.amount}`
        : minPrice
    }  ${priceRange.minVariantPrice.currencyCode}`;
  }
}
