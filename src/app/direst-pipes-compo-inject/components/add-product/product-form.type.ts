import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type PricesFormT = FormGroup<{
    description:FormControl<string>;
    price:FormControl<number>
}>;

export type PhotosFormT = FormGroup<{
    url:FormControl<string>;
}>;

export type ResumeFormGroupT = FormGroup<{
    title: FormControl<string>;
    prices: FormArray<PricesFormT>;
    offerDiscount: FormControl<number>;
    photos: FormArray<PhotosFormT>;
    description: FormControl<string>;
  }>;