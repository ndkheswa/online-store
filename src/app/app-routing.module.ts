import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: RegisterComponent },
  {path: 'home', component: HomeComponent },
  {path: 'orders', component: OrderComponent },
  {path: 'search', component: OrderSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
