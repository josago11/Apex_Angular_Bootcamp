import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"a",
    loadChildren:()=> import('./a/a.module').then(m=> m.AModule)
  },
  {
    path:"b",
    loadChildren:()=> import('./b/b.module').then(m=> m.BModule)
  },
  {
    path:"products",
    loadChildren:()=> import('./direst-pipes-compo-inject/direst-pipes-compo-inject-routing.module').then(m=> m.DirestPipesCompoInjectRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
