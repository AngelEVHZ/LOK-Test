import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

@Injectable(
  { providedIn: 'root' }
)
export class AuthenticatedGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  private checkSession() {
    if (this.authenticationService.readSession()) {
      return true;
    } else {
      return this.router.parseUrl("login");
    }
  }

  canActivate() {
    return this.checkSession();
  }

}
