import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type PricesFormT = FormGroup<{
    description:FormControl<string>;
    price:FormControl<number>
}>;

export type PhotosFormT = FormControl<string>;

export type PhotoT =  FormControl<string>;


export type ResumeFormGroupT = FormGroup<{
    title: FormControl<string>;
    prices: FormArray<PricesFormT>;
    offerDiscount: FormControl<number>;
    photos: FormArray<PhotoT>;
    description: FormControl<string>;
  }>;