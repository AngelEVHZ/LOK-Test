import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() maxPages: number;
  @Output() onSelectedPage = new EventEmitter<number>();

  pages = [];
  constructor() { }

  ngOnInit(): void {
    this.reloadPages();
  }

  ngOnChanges() {
    this.reloadPages();
  }

  reloadPages() {
    this.pages = [];
    for (let i = 1; i <= this.maxPages; i++) {
      this.pages.push(i);
    }
  }

  disabledPage(page) {
    return page == this.currentPage;
  }

  selectPage(page) {
    if (this.currentPage != page)
      this.onSelectedPage.emit(page);
  }
}
