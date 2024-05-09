import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirestPipesCompoInjectRoutingModule } from './direst-pipes-compo-inject-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RoundUpPipe } from './pipes/round-up.pipe';
import { ApplyDiscountPipe } from './pipes/apply-discount.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    PaginationComponent,
    FilterPipe,
    RoundUpPipe,
    ApplyDiscountPipe
  ],
  imports: [
    CommonModule,
    DirestPipesCompoInjectRoutingModule
  ],
  providers:[
    FilterPipe
  ],
  exports: [ProductsComponent]
})
export class DirestPipesCompoInjectModule { }
