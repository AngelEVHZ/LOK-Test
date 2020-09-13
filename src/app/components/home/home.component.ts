import { Component, OnInit,  ViewChild } from '@angular/core';
import { UserService } from "@services/user.service";
import { UserDto } from "@dto/user/user.dto";
import { AsideBarComponent } from "@shared/aside-bar/aside-bar.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 @ViewChild(AsideBarComponent)  asideBarComponent !: AsideBarComponent;
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


  editUser(user: UserDto) {
    this.asideBarComponent.setUser(user);
    this.showAsideBar = true;
  }

  hideBar() {
    this.showAsideBar = false;
  }
}
