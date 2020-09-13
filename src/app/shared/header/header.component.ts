import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from "@services/authentication.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()currentPage !: string;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isActivePage(page) {
    return this.currentPage == page;
  }

  logOut() {
    Swal.fire({
      title: 'Do you want to log out?',
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.authenticationService.logOut();
        this.router.navigate(["login"]);
      }
    });

  }
}
