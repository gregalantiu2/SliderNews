import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { NewsGridComponent } from './news-grid/news-grid.component';

@NgModule({
  declarations: [
    MainComponent,
    SliderBarComponent,
    NewsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
