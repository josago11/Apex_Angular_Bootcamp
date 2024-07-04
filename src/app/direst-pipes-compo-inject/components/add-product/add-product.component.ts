import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PhotosFormT, PricesFormT, ResumeFormGroupT } from './product-form.type';
import { PRODUCTS_FORM_LABELS } from './product-form.labels';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  protected label: any = PRODUCTS_FORM_LABELS;


  private getNewPrices(): PricesFormT {
    return new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
      }),
      price:  new FormControl(0, {
        nonNullable: true,
      }),
    });
  }

  private getNewPhoto(): PhotosFormT {
    return new FormGroup({
      url: new FormControl('', {
        nonNullable: true,
      })
    });
  }


  protected addProductForm:ResumeFormGroupT = new FormGroup({
    title: new FormControl('', {nonNullable:true}),
    prices: new FormArray([this.getNewPrices()]),
    offerDiscount: new FormControl(0, {nonNullable:true}),
    photos: new FormArray([this.getNewPhoto()]),
    description: new FormControl(),
  });
  constructor(public dialogRef: MatDialogRef<AddProductComponent>) {

  }

  protected addPhoto():void{
    
    this.addProductForm.controls.photos.push(this.getNewPhoto());
  }

  protected removePhoto(photoIndex: number): void {
    console.log("index" , photoIndex);
    if (this.addProductForm.controls.photos.length > 1) {
      this.addProductForm.controls.photos.removeAt(photoIndex);
    }
  }

  protected onSubmit(_event: SubmitEvent, _form: ResumeFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('this.resumeForm.value: %O', this.addProductForm.value);
  }
}
