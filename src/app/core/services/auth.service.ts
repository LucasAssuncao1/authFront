import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() { }

  public signIn(payload: { email: string, password: string }): Observable<any> {
    return this.http.post<{token: string}>(`${this.url}/sign`, payload).pipe(
      map((res) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['admin']);
        
      }),
      catchError((e) => {
        if(e.error.message) return throwError(() =>  e.error.message);

        return throwError(() =>  'Estamos com problemas no momento, tente mais tarde!');
      })
    );
  }

  public signOut(){
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }

}
