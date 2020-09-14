import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
@Input() list: Array<any>;
@Output() onItemClick = new EventEmitter();

  selectedId: number;
  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges() {
    if(this.list.length > 0) {
      this.selectedId = this.list[0].id;
    }
  }
  selectItem(item: any) {
    this.selectedId = item.id;
    this.onItemClick.emit(item);
  }

}
