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

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'orders', component: OrderComponent },
  {path: 'search', component: OrderSearchComponent },
  {path: 'course-detail/:id', component: CourseDetailComponent },
  {path: 'learner-dashboard', component: LearnerDashboardComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
