import { Component, OnInit } from '@angular/core';
import { UserService } from "@services/user.service";
import { UserDto } from "@dto/user.dto";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: Array<UserDto>;
  showAsideBar = false;
  constructor(private readonly userService: UserService) {
    this.users = [];
  }

  async ngOnInit(){
    await this.fetchUsers();
  }

  async fetchUsers() {
    this.users = await this.userService.getUsers();
  }


  editUser() {
    this.showAsideBar = true;
  }

  hideBar() {
    this.showAsideBar = false;
  }
}
