import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "@services/authentication.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(["login"]);
  }
}
