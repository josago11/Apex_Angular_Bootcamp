import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirestPipesCompoInjectRoutingModule } from './direst-pipes-compo-inject-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RoundUpPipe } from './pipes/round-up.pipe';
import { ApplyDiscountPipe } from './pipes/apply-discount.pipe';
import { AddProductComponent } from './components/add-product/add-product.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    PaginationComponent,
    FilterPipe,
    RoundUpPipe,
    ApplyDiscountPipe,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    DirestPipesCompoInjectRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDialogActions,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogClose,
    MatDialogContent,
    FormsModule
  ],
  providers:[
    FilterPipe
  ],
  exports: [ProductsComponent]
})
export class DirestPipesCompoInjectModule { }
