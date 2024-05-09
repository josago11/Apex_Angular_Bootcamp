import { Component } from '@angular/core';
import { Item } from '../../interfaces/item';
import { items } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Subscription, toArray } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public products:Item[]= new Array<Item>;
  public productSub = new Subscription();
  public pagItems:number = 1;
  public offers:boolean= false;
  public itemsNum:number=0;

  constructor(protected productService:ProductService){

  }

  public ngOnInit():void{
    let indx = 0;
    this.productSub = this.productService.getProducts().subscribe(
      (products)=>{
          this.products[indx] = products;
          indx ++;
      }
    );
    this.itemsNum = this.products.length;
  }

  public getCurrentPage(currentPage:number):void{
    this.pagItems = currentPage;
  }

  public filterOffers():void{
    this.offers = !this.offers;
    this.pagItems = 1;
    this.itemsNum = (this.offers) ? items.filter(i=>i.offerDiscount != undefined).length : items.length;
  }
  

  public ngOnDestroy():void{
    this.productSub.unsubscribe();
  }

}
