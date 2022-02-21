import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composantes/menu/menu.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import {FormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { HomeComponent } from './composantes/home/home.component';
import { CustomersComponent } from './composantes/customers/customers.component';
import { ProductsComponent } from './composantes/produits/products.component';
import { BillsComponent } from './composantes/bills/bills.component';
import { RequestInterceptorService } from './services/request-interceptor.service';


export function kcFactory(kcSecurity: KeycloakSecurityService) {
  return () => kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CustomersComponent,
    ProductsComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
