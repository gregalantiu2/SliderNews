import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { NewsGridComponent } from './news-grid/news-grid.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './core/add-header.interceptor'
import { DataService } from '../app/core/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import { MatInputModule } from '@angular/material/input';


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
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule
  ],
  providers: [DataService,
              { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi:true }
             ],
  bootstrap: [MainComponent]
})
export class AppModule { }
