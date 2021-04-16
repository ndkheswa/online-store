import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { environment } from 'src/environments/environment';
import { BASE_URL } from './tokens';
import { LayoutComponent } from './components/layout/layout.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OrderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.apiRoot }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
