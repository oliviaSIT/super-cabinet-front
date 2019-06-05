import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';
import { OrderLookupComponent } from './projects/admin/order-lookup/order-lookup.component';
import { HomeComponent } from './projects/home/home.component';
import { CheckOutComponent } from './projects/orders/check-out/check-out.component';
import { OrderStatusComponent } from './projects/orders/order-status/order-status.component';
import { PrivacyPolicyComponent } from './projects/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './projects/return-policy/return-policy.component';
import { ProductListComponent } from './projects/product/product-list/product-list.component';
import { ShoppingCartComponent } from './projects/shopping-cart/shopping-cart.component';
import { AdminLoginComponent } from './projects/auth/admin-login/admin-login.component';
import { ProductLinesRepositoryComponent } from './projects/admin/product-lines-repository/product-lines-repository.component';
import { AdminLogoutComponent } from './projects/auth/admin-logout/admin-logout.component';
import { ProductListDetail } from './projects/product/product-list/product-list-detail/product-list-detail';
import {UserRegisterComponent} from './projects/auth/user-register/user-register.component';
import {OrderLookupDetailComponent} from './projects/admin/order-lookup/order-lookup-detail/order-lookup-detail.component';
import {UserLoginComponent} from './projects/auth/user-login/user-login.component';
import {LogoutComponent} from './projects/auth/logout/logout.component';
import {AddProductComponent} from './projects/admin/add-product/add-product.component';
import {RegisterComponent} from './projects/auth/register/register.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminLoginComponent,
    children : [
      {
        path: 'orderAll',
        component: OrderLookupComponent
      },
      {
        path: 'orderAll/detail',
        component: OrderLookupDetailComponent
      },
      {
        path: 'admin-logout',
        component: AdminLogoutComponent
      },
      {
        path: 'regist-admin',
        component: RegisterComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'addProducts',
        component: AddProductComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'order/placed',
    component: OrderStatusComponent
  },
  {
    path: 'product/detail/:id',
    component: ProductListDetail
  },
  {
    path: 'policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'return',
    component: ReturnPolicyComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'cart/confirm',
    component: CheckOutComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: 'user/login',
    component: UserLoginComponent
  },
  {
    path: 'user/logout',
    component: LogoutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
