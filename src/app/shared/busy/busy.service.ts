import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  public loading: Observable<boolean>;
  private $loading: Subject<boolean>;

  constructor() {
    this.$loading = new Subject<boolean>();
    this.loading = this.$loading.asObservable();
  }

  show(state: boolean): void {
    this.$loading.next(state);
  }
}
