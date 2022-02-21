import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../constantes/api.constant';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  service_name:string = 'http://localhost:8081';

  constructor(private http: HttpClient, private kcSecurity: KeycloakSecurityService) { }


  getAll(page: number, size: number) {
    return this.http.get(this.service_name + '/customers?page='+page+'&size='+size);
  }

  getById(id: number) {
    return this.http.get(this.service_name + '/customers/'+id);
  }

  deleteById(id: number) {
    return this.http.delete(this.service_name + '/customers/'+id);
  }

  add(form: any) {
    return this.http.post(this.service_name + '/customers/add', form);
  }


}
