import { Component, OnInit } from '@angular/core';
import {UserService} from "@services/user.service";
import {AlbumDto} from "@dto/album/album.dto"
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  currentAlbum: AlbumDto;
 
  constructor(private readonly userService: UserService) { }

  async ngOnInit() {
    const response = await this.userService.getAlbum(3);
    const album = await this.userService.getPhotos(response[0]);
    this.currentAlbum = album;

  }





  


}
