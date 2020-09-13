import { Component, OnInit,  ViewChild } from '@angular/core';
import { UserService } from "@services/user.service";
import { UserDto } from "@dto/user/user.dto";
import { PaginationUserDto } from "@dto/user/pagination-user.dto";
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
  currentPage: number;
  totalPages: number;
  constructor(private readonly userService: UserService) {
    this.users = [];
    this.currentPage = 1;
    this.totalPages = 1;
  }

  async ngOnInit(){
    await this.fetchUsers();
  }

  async fetchUsers(page?: number) {
    this.users = [];
    const paginationUsers: PaginationUserDto = await this.userService.getUsers(page);
    this.totalPages = paginationUsers.total_pages;
    this.users = paginationUsers.data;
    this.users.forEach(user => {
      user.description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    });
  }


  editUser(user: UserDto) {
    this.asideBarComponent.setUser(user);
    this.showAsideBar = true;
  }

  hideBar() {
    this.showAsideBar = false;
  }

  handleUserChange(userEdited: UserDto) {
    let index = this.users.findIndex(user => user.id == userEdited.id);
    this.users[index] = {
      ...this.users[index],
      last_name: userEdited.last_name,
      first_name: userEdited.first_name,
      description: userEdited.description,
      edited: true,
    }
  }

  async onSelectedPage(page){
    this.currentPage = page;
    document.getElementById( 'top-page' ).scrollIntoView();
    await this.fetchUsers(this.currentPage);
  }
}
