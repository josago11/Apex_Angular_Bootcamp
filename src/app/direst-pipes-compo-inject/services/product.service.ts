import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, from, zip } from 'rxjs';
import { items } from '../models/product.model';
import { Item } from '../interfaces/item';
import { combineLatest, merge } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private source:Observable<Item> = from(items);

  constructor() { }

  public getProducts():Observable<Item>{

    return this.source;
  }

  public getProduct(id:string):Observable<Item>{
    
    return this.source.pipe(filter(i => i.id == id));
  }

  public filterProduct(text:string):Observable<Item>{
    return this.source.pipe(filter(i => i.title.toLowerCase().includes(text.toLowerCase())));
  }

  public addProduct(newProduct:Item){
    items.push(newProduct);
    this.source = from(items);
  }

}
