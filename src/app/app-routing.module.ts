import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';
import { OrderLookupComponent } from './projects/admin/order-lookup/order-lookup.component';
import { AboutComponent } from './projects/about/about.component';
import { ContactUsComponent } from './projects/contact-us/contact-us.component';
import { FaqComponent } from './projects/faq/faq.component';
import { CheckOutComponent } from './projects/orders/check-out/check-out.component';
import { OrderStatusComponent } from './projects/orders/order-status/order-status.component';
import { PrivacyPolicyComponent } from './projects/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './projects/return-policy/return-policy.component';
import { CabinetListComponent } from './projects/cabinet/cabinet-list/cabinet-list.component';
import { ShoppingCartComponent } from './projects/shopping-cart/shopping-cart.component';
import { AdminLoginComponent } from './projects/auth/admin-login/admin-login.component'
import { ProductLinesRepositoryComponent } from './projects/admin/product-lines-repository/product-lines-repository.component';
import { RegisterComponent } from './projects/auth/register/register.component';
import { AddCabinetComponent } from './projects/admin/add-cabinet/add-cabinet.component';
import { AdminLogoutComponent } from './projects/auth/admin-logout/admin-logout.component';
import { CabinetListDetailComponent } from './projects/cabinet/cabinet-list/cabinet-list-detail/cabinet-list-detail.component';
import {UserRegisterComponent} from "./projects/auth/user-register/user-register.component";
import {OrderLookupDetailComponent} from './projects/admin/order-lookup/order-lookup-detail/order-lookup-detail.component'

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
        path: 'regist-admin',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: AdminLogoutComponent
      },
      {
        path: 'cabinets',
        component: ProductLinesRepositoryComponent
      },
      {
        path: 'addCabinets',
        component: AddCabinetComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'orders/placed',
    component: OrderStatusComponent
  },
  {
    path: 'cabinet/detail/:id',
    component: CabinetListDetailComponent
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
    path: 'cabinet',
    component: CabinetListComponent
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
    path: '',
    redirectTo: 'cabinet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
