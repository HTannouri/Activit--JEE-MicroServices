import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../constantes/api.constant';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  service_name:string = 'http://localhost:8082';

  constructor(private http: HttpClient) { }


  getAll(page: number, size: number) {
    return this.http.get(this.service_name + '/products?page='+page+'&size='+size);
  }

  getById(id: number) {
    return this.http.get(this.service_name + '/products/'+id);
  }

  deleteById(id: number) {
    return this.http.delete(this.service_name + '/products/'+id);
  }

  add(form: any) {
    return this.http.post(this.service_name + '/products/add', form);
  }

}
