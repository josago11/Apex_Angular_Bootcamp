import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test', component: MyFirstComponentComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFirstComponentComponent,
    RouterModule.forChild(routes)
  ],
  exports: [MyFirstComponentComponent],
})
export class MyFirstModuleModule { 

 
}
