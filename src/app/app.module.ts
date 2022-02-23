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
import { FooterComponent } from './components/footer/footer.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { StartLearningComponent } from './components/home/start-learning/start-learning.component';
import { SteerCareerComponent } from './components/home/steer-career/steer-career.component';
import { ToLearnComponent } from './components/home/to-learn/to-learn.component';
import { AccordianComponent } from './components/home/accordian/accordian.component';
import { WebDesignComponent } from './components/home/web-design/web-design.component';
import { LearnerDashboardComponent } from './components/learner-dashboard/learner-dashboard.component';
import { CourseComponent } from './components/course/course.component';
import { MyCourseComponent } from './components/my-course/my-course.component';
import { MyCourseListComponent } from './components/my-course-list/my-course-list.component';
import { LoginComponent } from './components/login/login.component';
import { SuccessDialogComponent } from './components/shared/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './components/shared/error-dialog/error-dialog.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

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
    FooterComponent,
    GetStartedComponent,
    BannerComponent,
    StartLearningComponent,
    SteerCareerComponent,
    ToLearnComponent,
    AccordianComponent,
    WebDesignComponent,
    LearnerDashboardComponent,
    CourseComponent,
    CourseListComponent,
    MyCourseComponent,
    MyCourseListComponent,
    LoginComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    CourseDetailComponent
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
