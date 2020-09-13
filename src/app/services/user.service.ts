import { Injectable } from '@angular/core';
import { ENDPOINT } from "../config/constants";
import { HttpClient } from '@angular/common/http';
import { UserDto } from "@dto/user/user.dto";
import { PostDto } from "@dto/user/post.dto";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  async getUsers(): Promise<Array<UserDto>> {
    const result: any = await this.http.get(`${ENDPOINT.RE}/users`).toPromise();
    return result.data;
  }

  async getPosts(userId: number): Promise<Array<PostDto>> {
    const result: any = await this.http.get(`${ENDPOINT.JT}/posts?userId=${userId}`).toPromise();
    return result;
  }
}
