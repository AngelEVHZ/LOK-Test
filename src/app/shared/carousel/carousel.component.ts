import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
@Input() list: any;
@Output() onItemClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: any) {
    this.onItemClick.emit(item);
  }

}
