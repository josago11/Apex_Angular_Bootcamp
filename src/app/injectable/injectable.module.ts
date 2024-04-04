import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneService } from './services/one.service';
import { InjectableComponent } from './components/injectable/injectable.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InjectableComponent,
    ComponentOneComponent
  ],
  exports: [InjectableComponent, ComponentOneComponent],
  providers: [OneService]
})
export class InjectableModule {
  public strVar:String;
  constructor(private one:OneService){
    this.strVar = one.strVar ;
  }
 }
