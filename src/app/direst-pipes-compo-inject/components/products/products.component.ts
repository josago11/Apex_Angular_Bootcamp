import { Component, Inject } from '@angular/core';
import { Item } from '../../interfaces/item';
import { items } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import {MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  
})
export class ProductsComponent {

  public products:Item[]= new Array<Item>;
  public productSub = new Subscription();
  public pagItems:number = 1;
  public offers:boolean= false;
  public itemsNum:number=0;

  constructor(protected productService:ProductService, public dialog: MatDialog){

  }

  public ngOnInit():void{
    this.getProducts();
  }

  public getProducts():void{
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

  public newProduct():void{
    let newItem = {} as Item;
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: newItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      newItem = result;
      newItem.id = this.products.length + 1 + "";
      this.productService.addProduct(newItem);
      this.getProducts();
    });

  }
  
  public ngOnDestroy():void{
    this.productSub.unsubscribe();
  }

}
