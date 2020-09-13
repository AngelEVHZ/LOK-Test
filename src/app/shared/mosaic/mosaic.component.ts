import { Component, OnInit, Input } from '@angular/core';
import { AlbumDto } from '@dto/album/album.dto';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.scss']
})
export class MosaicComponent implements OnInit {
  @Input() album: AlbumDto;
  constructor() { }
  iterations = [];
  size: number = 5;
  ngOnInit(): void {
    this.iterations = [];
    const num = Math.floor(this.album.photos.length / this.size);
    for (let i = 1; i <= num; i++) {
      this.iterations.push(i);
    };
  }

  getPhotos(iteration) {
    const from = this.size * (iteration - 1);
    const to = this.size * iteration;
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

  getMosaicClass(index) {
    let iter = index % 3;
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
