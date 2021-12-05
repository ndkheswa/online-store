import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LearnerDashboardComponent } from './components/learner-dashboard/learner-dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'orders', component: OrderComponent },
  {path: 'search', component: OrderSearchComponent },
  {path: 'learner-dashboard', component: LearnerDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
