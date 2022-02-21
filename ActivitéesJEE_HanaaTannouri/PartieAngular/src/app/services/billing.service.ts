import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../constantes/api.constant';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  service_name:string = 'http://localhost:8083';

  constructor(private http: HttpClient) { }


  getAll(page: number, size: number) {
    return this.http.get(this.service_name + '/bills?page='+page+'&size='+size);
  }

  getById(id: number) {
    return this.http.get(this.service_name + '/bills/'+id);
  }

  getFullById(id: number) {
    return this.http.get(this.service_name + '/fullBill/'+id);
  }

  deleteById(id: number) {
    return this.http.delete(this.service_name + '/bills/'+id);
  }

  add(form: any) {
    return this.http.post(this.service_name + '/bills', form);
  }

}
