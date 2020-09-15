import { Component, OnInit, Input } from '@angular/core';
import { AlbumDto } from '@dto/album/album.dto';
import { UserDto } from '@dto/user/user.dto';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.scss']
})
export class MosaicComponent implements OnInit {
  @Input() album: AlbumDto;
  @Input() user: UserDto;
  constructor() { }
  iterations = [];
  size: number = 5;
  currentPage: number = 0;
  totalPages: number;
  showMosaic: boolean = false;
  ngOnInit(): void {
  }


  ngOnChanges() {
    this.showMosaic = this.album && this.album.photos && this.album.photos.length > 0;
    if (this.showMosaic) {
      this.currentPage = 0;
      this.totalPages = Math.floor(this.album.photos.length / this.size);

    }
  }

  previewPage() {
    if (this.showMosaic && this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.showMosaic && this.currentPage < (this.totalPages - 1)) {
      this.currentPage++;
    }
  }

  getPhotos() {
    const from = this.size * (this.currentPage);
    const to = this.size * (this.currentPage + 1);
    return this.album.photos.filter((photo, index) => {
      return index >= from && index < to;
    });
  }

  getClass(index) {
    let classname = "";
    switch (index) {
      case 0:
        classname = "one";
        break;
      case 1:
        classname = "two";
        break;
      case 2:
        classname = "three";
        break;
      case 3:
        classname = "four";
        break;
      case 4:
        classname = "five";
        break;
    }
    return classname;
  }

  getMosaicClass() {
    let iter = this.currentPage % 3;
    let classname = "";
    switch (iter) {
      case 0:
        classname = "third-mosaic";
        break;
      case 1:
        classname = "first-mosaic";
        break;
      case 2:
        classname = "second-mosaic";
        break;
    }
    return classname;
  }
}
