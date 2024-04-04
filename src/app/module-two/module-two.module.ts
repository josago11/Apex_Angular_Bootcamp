import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTwoComponent } from './components/component-two/component-two.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentTwoComponent
  ],
  exports:[ComponentTwoComponent]
})
export class ModuleTwoModule { }
