import { Component, Inject } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhotosFormT, PricesFormT, ResumeFormGroupT } from './product-form.type';
import { PRODUCTS_FORM_LABELS } from './product-form.labels';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {

  protected label: any = PRODUCTS_FORM_LABELS;

  protected duplicatedPhotoValidator():ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const photo = control.value
      
      if(!photo) return null;

      const photos =  this.addProductForm.value.photos;
     
      if(photos){
        const isDuplicate = photos.includes(photo);
        if(isDuplicate) return {duplicated:true}
      }
  
      return null;
    };
  }

  protected duplicatedPriceDescriptionValidator():ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const description = control.value
      
      if(!description) return null;

      const descriptions =  this.addProductForm.value.prices;
      
      if(descriptions){
        const isDuplicate = descriptions.some(v => v.description==description);
        if(isDuplicate) return {duplicated:true}
      }
  
      return null;
    };
  }

  private getNewPrices(): PricesFormT {
    return new FormGroup({
      description: new FormControl('', {
        nonNullable: true,
        validators:[Validators.required, Validators.pattern(/^[\w ]+$/), this.duplicatedPriceDescriptionValidator()]
      }),
      price: new FormControl(0, {
        nonNullable: true,
        validators:[Validators.required, Validators.min(0)]
      }),
    });
  }

  private getNewPhoto():PhotosFormT {
    return new FormControl('', {
        nonNullable: true,
        validators:[Validators.required, this.duplicatedPhotoValidator()]
    });
  }

  
  protected addProductForm:ResumeFormGroupT = new FormGroup({
    title: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.minLength(5)]}),
    prices: new FormArray([this.getNewPrices()]),
    offerDiscount: new FormControl(0, {nonNullable:true, validators:[Validators.required, Validators.min(0), Validators.max(100)]}),
    photos: new FormArray([this.getNewPhoto()], {validators:[Validators.minLength(1)]}),
    description: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.minLength(5)]}),
  });

  constructor(public dialogRef: MatDialogRef<AddProductComponent>, @Inject(MAT_DIALOG_DATA) public newProduct:Item) {
  
  }

  protected addPhoto():void{
    
    this.addProductForm.controls.photos.push(this.getNewPhoto());
  }

  protected removePhoto(photoIndex: number): void {
    if (this.addProductForm.controls.photos.length > 1) {
      this.addProductForm.controls.photos.removeAt(photoIndex);
    }
  }

  protected addPrice(): void {
    this.addProductForm.controls.prices.push(this.getNewPrices());
  }

  
  protected removePrice(priceIndex: number): void {
    if (this.addProductForm.controls.prices.length > 1) {
      this.addProductForm.controls.prices.removeAt(priceIndex);
    }
  }
  
  protected minLengthErrorFieldLabel: (error: any) => string = (
    error: any
  ): string => {
    return `This field should be ${error.minlength.requiredLength} characters long`;
  };

  protected onSubmit(_event: SubmitEvent, _form: ResumeFormGroupT): void {
    this.newProduct.title = this.addProductForm.value.title!;
    this.newProduct.offerDiscount = this.addProductForm.value.offerDiscount;
    this.newProduct.description = this.addProductForm.value.description!;
    this.newProduct.photos = this.addProductForm.value.photos!;
    
    let prices:string = "{";
    this.addProductForm.value.prices!.forEach(p => {
      prices = prices + '"'+p.description+'": ' + p.price;
    });
    prices = prices + "}"
    this.newProduct.prices = JSON.parse(prices);
  
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}



