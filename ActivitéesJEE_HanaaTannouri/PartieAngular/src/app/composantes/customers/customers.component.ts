import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any = [];


  constructor(private customerService: CustomerService,
    public kcSec: KeycloakSecurityService) { }


  ngOnInit(): void {

    this.getCustomers();

  }

  getCustomers() {
    this.customerService.getAll(0, 10).subscribe((data:any) => {
      this.customers = data._embedded.customers;
    });
  }

  onRemove(id: number) {
    this.customerService.deleteById(id).subscribe(data => {
      this.getCustomers();
    });
  }

  onSubmit(form: NgForm) {
    let customerForm = {
      'name': form.value['name'],
      'email': form.value['email']
    }
    this.customerService.add(customerForm).subscribe(data => {
      this.getCustomers();
    });
  }

}
