import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { ClockComponent } from './Components/clock/clock.component';
import { HeaderComponent } from './Components/header/header.component';
import { AppService } from './services/app.service';
import { LocalStorageService } from './services/localstorage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './Components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    ClockComponent,
    HeaderComponent,
    SearchBarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule ,
  ],
  providers: [
    AppService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
