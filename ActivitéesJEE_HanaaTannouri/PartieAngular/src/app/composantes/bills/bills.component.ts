import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  facture: any = null;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
  }

  getBill(id: number) {
    this.billingService.getFullById(id).subscribe(data => {
      this.facture = data;
    });
  }

  onSubmit(form: NgForm) {
    let id = form.value['id'];
    this.getBill(id);
  }

}
