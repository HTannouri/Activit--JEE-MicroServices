import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventoryService } from 'src/app/services/inventory.service';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];


  constructor(private inventoryService: InventoryService,
    public kcSec: KeycloakSecurityService) { }


  ngOnInit(): void {

    this.getCustomers();

  }

  getCustomers() {
    this.inventoryService.getAll(0, 10).subscribe((data:any) => {
      this.products = data._embedded.products;
    });
  }

  onRemove(id: number) {
    this.inventoryService.deleteById(id).subscribe(data => {
      this.getCustomers();
    });
  }

  onSubmit(form: NgForm) {
    let customerForm = {
      'name': form.value['name'],
      'price': form.value['price'],
      'quantity': form.value['quantity'],
    }
    this.inventoryService.add(customerForm).subscribe(data => {
      this.getCustomers();
    });
  }

}
