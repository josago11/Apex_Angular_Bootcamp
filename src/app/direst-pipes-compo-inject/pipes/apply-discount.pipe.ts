import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applyDiscount'
})
export class ApplyDiscountPipe implements PipeTransform {

  transform(price:number, discount?:number): number {
    if(discount != undefined)
      return price - (price * discount);
    return price;
  }

}
