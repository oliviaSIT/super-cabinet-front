import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './projects/modules/services/auth.service';
import { AppGuard } from './app.guard';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './projects/auth/admin-login/admin-login.component';
import { AdminLogoutComponent } from './projects/auth/admin-logout/admin-logout.component';
import { HomeComponent } from './projects/home/home.component';
import { PrivacyPolicyComponent } from './projects/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './projects/return-policy/return-policy.component';
import { ShippingPolicyComponent } from './projects/shipping-policy/shipping-policy.component';
import { OrderStatusComponent } from './projects/orders/order-status/order-status.component';
import { ShoppingCartComponent } from './projects/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './projects/orders/check-out/check-out.component';
import { ProductListComponent } from './projects/product/product-list/product-list.component';
import { OrderLookupComponent } from './projects/admin/order-lookup/order-lookup.component';
import { ViewOrderDetailsComponent } from './projects/admin/view-order-details/view-order-details.component';
import { ProductLinesRepositoryComponent } from './projects/admin/product-lines-repository/product-lines-repository.component';
import { ProductRepositoryComponent } from './projects/admin/product-repository/product-repository.component';
import { RegisterComponent } from './projects/auth/register/register.component';
import { LoginErrorComponent } from './projects/auth/login-error/login-error.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminIndexComponent } from './projects/auth/admin-index/admin-index.component';
import { AddProductComponent } from './projects/admin/add-product/add-product.component';
import { ProductListDetail } from './projects/product/product-list/product-list-detail/product-list-detail';
import { ShoppingCartService } from './projects/service/shopping-cart.service';
import { ProShowService } from './projects/service/pro-show.service';
import { OrderLookupDetailComponent } from './projects/admin/order-lookup/order-lookup-detail/order-lookup-detail.component';
import { UserRegisterComponent } from './projects/auth/user-register/user-register.component';
import { OrderDetailService } from './projects/service/order-detail.service';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {CarouselModule, DropdownModule} from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { UserLoginComponent } from './projects/auth/user-login/user-login.component';
import { LogoutComponent } from './projects/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent,
    ShippingPolicyComponent,
    OrderStatusComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ProductListComponent,
    OrderLookupComponent,
    ViewOrderDetailsComponent,
    ProductLinesRepositoryComponent,
    ProductRepositoryComponent,
    RegisterComponent,
    LoginErrorComponent,
    AdminIndexComponent,
    AddProductComponent,
    ProductListDetail,
    OrderLookupDetailComponent,
    UserRegisterComponent,
    UserLoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToastModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    PanelModule,
  ],
  providers: [
    AuthService,
    AppGuard,
    ProShowService,
    ShoppingCartService,
    OrderDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
