import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService {
  private currentUser$ = new Subject<any>();
  private currentUserBehavior$ = new BehaviorSubject<any>({ name: 'no name' });
  private currentUserReplay$ = new ReplaySubject<any>(3);

  get currentUser(): Observable<any> {
    return this.currentUser$.asObservable();
  }

  constructor(private httpClient: HttpClient) {
  }
}
