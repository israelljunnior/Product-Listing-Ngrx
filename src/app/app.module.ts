import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { reducerProduct } from './product/product.ngrx';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      products: reducerProduct
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
