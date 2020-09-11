import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "@services/authentication.service";
import { AuthenticationDto } from '../../dto/authentication/authentication.dto';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup;


  constructor(private readonly authenticationService: AuthenticationService,
    private router: Router,) {

    this.authenticationForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
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
        this.router.navigate(["home"]);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
