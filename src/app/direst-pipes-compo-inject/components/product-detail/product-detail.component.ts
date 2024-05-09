import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  private subProductId: Subscription = new Subscription();

  public product:Item | undefined;
  
  public pricesArray = new Array;

  public finalPrice:number = 0; 

  constructor(private readonly activatedRoute: ActivatedRoute, private productService:ProductService){

  }

  public ngOnInit():void{
    this.subProductId = this.activatedRoute.params.subscribe((params: Params): void => {
      let productId = params['productId'];
      this.productService.getProduct(productId).subscribe(
        (product)=>{
          this.product = product;
        }
      );
    });
    let propArray = Object.getOwnPropertyNames(this.product?.prices);
    this.pricesArray = propArray.map(key => [key, this.product?.prices[key]]);
    console.log(this.pricesArray);
    console.log(this.product?.prices);
    
  }


  public ngOnDestroy():void{
    this.subProductId.unsubscribe();
  }

}
