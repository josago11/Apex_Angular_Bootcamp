import { NgModule } from '@angular/core';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';
import { RouterModule, Routes } from '@angular/router';
import { SlugComponent } from './components/slug/slug.component';


const routes: Routes = [
  {
     path:'',
     component:LazyLoadingComponent
  },
  {
    path:'slug/:slug',
    component:SlugComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadingModule { }
