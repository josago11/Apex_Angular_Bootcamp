import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interfaces/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products:Item[], pageNumber:number, offers:boolean): Item[] {
    if(offers)
      products=products.filter(p=>p.offerDiscount != undefined)
    let fItem = (pageNumber - 1) * 5;
    let lItem =  pageNumber * 5;
    return products.slice(fItem, lItem);
  }

}
