import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirestPipesCompoInyectRoutingModule } from './direst-pipes-compo-inyect-routing.module';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DirestPipesCompoInyectRoutingModule
  ]
})
export class DirestPipesCompoInyectModule { }
