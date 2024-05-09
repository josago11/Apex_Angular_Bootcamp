import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, from, of } from 'rxjs';
import { items } from '../models/product.model';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private source:Observable<Item> = from(items)

  constructor() { }

  public getProducts():Observable<Item>{

    return this.source;

  }

  public getProduct(id:string):Observable<Item>{
    
    return this.source.pipe(filter(i => i.id == id));
  }
}
