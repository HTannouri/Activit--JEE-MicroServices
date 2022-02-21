import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc: KeycloakInstance = new Keycloak();

  constructor() { }


  async init() {
    console.log("init kc");

    this.kc  = new Keycloak({
      url: "http://localhost:8080/auth/",
      realm: "ecomm_realm",
      clientId: "ecomm-angular"
    });

    await this.kc.init({
      onLoad: 'check-sso',
      promiseType: "native"
    });

    console.log(this.kc.token);

  }

  isAdmin():boolean {
    return this.kc.hasRealmRole("ADMIN");
  }

}
