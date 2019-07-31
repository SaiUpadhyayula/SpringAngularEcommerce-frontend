import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { BsHeaderComponent } from './bs-header/bs-header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { CategoryService } from './category.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClientInterceptor } from './http.client.interceptor';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchSharedService } from './search-shared-service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    BsHeaderComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    WishlistComponent,
    EditProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProductPageComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    SearchResultsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'products/category/:categoryName', component: ProductsComponent},
      {path:'product-page', component: ProductPageComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'check-out', component:CheckOutComponent},
      {path:'order-success', component:OrderSuccessComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'admin/products', component:AdminProductsComponent},
      {path:'admin/orders', component:AdminOrdersComponent},
      {path:'search/:searchTerm', component: SearchResultsComponent}
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, AuthenticationService, LocalStorageService, SearchSharedService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
