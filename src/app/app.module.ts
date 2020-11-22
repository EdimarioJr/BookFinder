import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './modules/header/header-module.module';
import { SearchModule} from './modules/search/search-module.module';
import {BookModule} from './modules/book/book.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SearchModule,
    BookModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
