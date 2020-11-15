import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { NewsGridComponent } from './news-grid/news-grid.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MainComponent,
    SliderBarComponent,
    NewsGridComponent,
    SearchBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
