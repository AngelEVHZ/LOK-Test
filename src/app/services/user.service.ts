import { Injectable } from '@angular/core';
import { ENDPOINT } from "../config/constants";
import { HttpClient } from '@angular/common/http';
import { UserDto } from "../dto/user.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  async getUsers(): Promise<Array<UserDto>> {
    const result: any = await this.http.get(`${ ENDPOINT.RE }/users`).toPromise();
    return result.data;
  }
}
