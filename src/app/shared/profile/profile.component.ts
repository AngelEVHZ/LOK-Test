import { Component, OnInit, Input } from '@angular/core';
import { UserDto } from "@dto/user.dto";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public user: UserDto;
  constructor() { }

  ngOnInit(): void {

  }

  getName(){
    return this.user.first_name + " " + this.user.last_name;
  }
}
