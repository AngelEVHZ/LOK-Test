import { Component, OnInit } from '@angular/core';
import { UserService } from "@services/user.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  async ngOnInit(){
    await this.fetchUsers();
  }

  async fetchUsers() {
    const users = await this.userService.getUsers();
    console.log(users);
  }
}
