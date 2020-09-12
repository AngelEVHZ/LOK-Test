import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public profile;
  constructor() { }

  ngOnInit(): void {
    console.log(this.profile);
  }

  getName(){
    return this.profile.first_name + " " + this.profile.last_name;
  }
}
