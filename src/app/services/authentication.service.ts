import { Injectable } from '@angular/core';
import { ENDPOINT } from "../config/constants";
import { HttpClient } from '@angular/common/http';
import { AuthenticationDto } from "@dto/authentication/authentication.dto";
import { AuthenticationResponseDto } from "@dto/authentication/authentication-response.dto";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  async login(autentication: AuthenticationDto): Promise<boolean> {
    const response: AuthenticationResponseDto = await this.http.post(`${ENDPOINT.RE}/login`, autentication).toPromise() as AuthenticationResponseDto;
    this.writeSession(response);
    return true;
  }

  logOut() {
    const session: AuthenticationResponseDto = JSON.parse(localStorage.getItem("$session"));
    if (session) {
      localStorage.removeItem('$session');
    }
  }

  writeSession(authenticationResponse: AuthenticationResponseDto): void {
    localStorage.setItem("$session", JSON.stringify(authenticationResponse));
  }

  readSession(): AuthenticationResponseDto {
    try {
      const authenticationResponse: AuthenticationResponseDto = JSON.parse(localStorage.getItem("$session"));
      return authenticationResponse;
    } catch (e) {
      return null;
    }
  }
}
