import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "@services/authentication.service";
import { AuthenticationDto } from '../../dto/authentication/authentication.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup;


  constructor(private readonly authenticationService: AuthenticationService,
    private router: Router) {

    this.authenticationForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });

  }

  async ngOnInit() {

  }


  async onSubmit() {
    const authenticationObject = {
      ...this.authenticationForm.value
    } as AuthenticationDto;
    try {
      const response = await this.authenticationService.login(authenticationObject);
      if (response) {
        await Swal.fire({
          title: 'Welcome!',
          icon: 'success'
        });
        this.router.navigate(["home"]);
      }
    } catch (err) {
      const msj = err.error.error;
      Swal.fire(
        'Error logging in',
        "The user or password is incorrect",
        'error'
      )
    }
  }

  get email() { return this.authenticationForm.get('email'); }
  get password() { return this.authenticationForm.get('password'); }
}
