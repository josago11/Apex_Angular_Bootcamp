import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirestPipesCompoInjectModule } from './direst-pipes-compo-inject/direst-pipes-compo-inject.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirestPipesCompoInjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
