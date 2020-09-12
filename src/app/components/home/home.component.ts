import { Component, OnInit } from '@angular/core';
import { UserService } from "@services/user.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public profiles: any;
  constructor(private readonly userService: UserService) { 
    this.profiles = [];
  }

  async ngOnInit(){
    await this.fetchUsers();
  }

  async fetchUsers() {
    this.profiles = await this.userService.getUsers();
    
  }
}
