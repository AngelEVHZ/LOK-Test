import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {
  @Input() isHidden: boolean;
  @Output() hideBar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.hideBar.emit();
  }

}
