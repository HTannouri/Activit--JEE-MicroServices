import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './composantes/bills/bills.component';
import { CustomersComponent } from './composantes/customers/customers.component';
import { HomeComponent } from './composantes/home/home.component';
import { ProductsComponent } from './composantes/produits/products.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "customers", component: CustomersComponent},
  {path: "products", component: ProductsComponent},
  {path: "bills", component: BillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
