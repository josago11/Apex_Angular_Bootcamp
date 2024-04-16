import { RouterModule, Routes } from '@angular/router';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        component:SimpleRouteComponent,
        path:'simpleroute'
    }, 
    {
        path:'lazyloading',
        loadChildren:()=> import('./lazy-loading/lazy-loading.module').then(m=> m.LazyLoadingModule)
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
  })
  export class AppRoutingModule {}