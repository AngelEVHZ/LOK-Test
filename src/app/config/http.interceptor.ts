import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { BusyService } from '../shared/busy/busy.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = request.headers;
    let showBusy = request.headers.get("Busy") ? request.headers.get("Busy") != "false" : true;
    const authRequest: HttpRequest<any> = request.clone({ headers });
    if (showBusy) {
      this.busyService.show(true);
    }
    return next.handle(authRequest).pipe(tap((event: any) => {
      if (event.ok)
        this.busyService.show(false);
    }, (err: any) => {
      this.busyService.show(false);
    })
    );
  }

}
