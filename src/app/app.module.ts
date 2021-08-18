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
import { OrderComponent } from './components/order/order.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { RegisterComponent } from './components/register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HighlightDirective } from './highlight.directive';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderSearchComponent,
    RegisterComponent,
    CourseListComponent,
    HighlightDirective,
    MenuListItemComponent,
    TopNavComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    FooterComponent,
    GetStartedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.apiRoot }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
