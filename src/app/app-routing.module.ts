import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LearnerDashboardComponent } from './components/learner-dashboard/learner-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/shared/auth-guard';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MyCourseDetailComponent } from './components/my-course-detail/my-course-detail.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'orders', component: OrderComponent },
  {path: 'search', component: OrderSearchComponent },
  {path: 'course-detail/:id', component: CourseDetailComponent, canActivate: [AuthGuard], data : {roles : ["Student"]} },
  {path: 'chapter-detail/:id', component: ChapterDetailComponent, canActivate: [AuthGuard], data : {roles : ["Student"]} },
  {path: 'learner-dashboard', component: LearnerDashboardComponent, canActivate: [AuthGuard], data : {roles : ["Student"]} },
  {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data : {roles : ["Admin"]} },
  {path: 'my-course-detail/:id', component: MyCourseDetailComponent },
  {path: 'chapter', component: ChapterComponent },
  {path: 'learner-dashboard', component: LearnerDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
