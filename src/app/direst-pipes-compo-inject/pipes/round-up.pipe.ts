import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundUp'
})
export class RoundUpPipe implements PipeTransform {

  transform(price:number): number {
    let intNum = Math.trunc(price)
    let decNum = price-Math.floor(price);
    if(decNum == 0)
      return price;
    return (decNum>0.5) ? Math.ceil(price) : intNum + 0.50;
  }

}
