import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  private http = inject(HttpClient);

  constructor() { }

  public signIn(payload: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.url}/sign`, payload).pipe(
      map((data) => {
        return console.log(data)
      }),
      catchError((err) => {
        return throwError(() =>  err.error.message);
      })
    );
  }
}
