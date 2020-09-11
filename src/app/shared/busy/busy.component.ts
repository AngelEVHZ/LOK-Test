import { Component, OnInit } from '@angular/core';
import { BusyService } from './busy.service';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.scss']
})
export class BusyComponent implements OnInit {

  public pending: number = 0;

  constructor(private busyService: BusyService) { }

  ngOnInit() {
    this.busyService.loading.subscribe((x: boolean) => {
      if (x) {
        this.pending++;
      } else {
        this.pending = this.pending > 0 ? this.pending - 1 : 0;
      }
    });
  }
}
