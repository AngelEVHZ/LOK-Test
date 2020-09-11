import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

@Injectable(
  { providedIn: 'root' }
)
export class NoAuthenticatedGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  private checkSession() {
    if (this.authenticationService.readSession()) {
      return this.router.parseUrl("home");
    } else {
      return true;
    }
  }

  canActivate() {
    return this.checkSession();
  }

}
