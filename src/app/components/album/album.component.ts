import { Component, OnInit } from '@angular/core';
import { UserService } from "@services/user.service";
import { AlbumDto } from "@dto/album/album.dto";
import { UserDto } from '@dto/user/user.dto';
import { PaginationUserDto } from '@dto/user/pagination-user.dto';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  currentAlbum: AlbumDto;
  users: Array<UserDto>;
  totalPages: number;
  selectedUser: UserDto;
  constructor(private readonly userService: UserService) { }

  async ngOnInit() {
    this.fetchUsers();
  }

  async fetchUsers(page?: number) {
    this.users = [];
    const paginationUsers: PaginationUserDto = await this.userService.getUsers(page);
    this.totalPages = paginationUsers.total_pages;
    this.users = paginationUsers.data;
    if (this.users.length > 0)
      await this.fetchAlbum(this.users[0], false);
  }

  async fetchAlbum(user, scroll:boolean = true) {
    this.selectedUser = user;
    this.currentAlbum = null;
    const response = await this.userService.getAlbum(user.id);
    const album = await this.userService.getPhotos(response[0]);
    this.currentAlbum = album;
    // if (scroll)
    // document.getElementById('end-mosaic').scrollIntoView();
  }

}
