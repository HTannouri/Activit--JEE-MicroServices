import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public kcSecurity: KeycloakSecurityService) { }

  ngOnInit(): void {
  }


  onLogout() {
    
    this.kcSecurity.kc.logout();
  }

  onLogin() {
    this.kcSecurity.kc.login();
  }
}
