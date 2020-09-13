import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDto } from "@dto/user/user.dto";
@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {
  @Input() isHidden: boolean;
  @Output() hideBar = new EventEmitter<boolean>();

  user: UserDto;

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.hideBar.emit();
  }

  setUser(user: UserDto) {
    this.user = user;
  }

}
