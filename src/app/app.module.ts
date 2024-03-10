import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { EachHouseComponent } from './component/each-house/each-house.component';
import { PillsComponent } from './component/pills/pills.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { OneHouseComponent } from './component/one-house/one-house.component';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    EachHouseComponent,
    PillsComponent,
    OneHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, 
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
