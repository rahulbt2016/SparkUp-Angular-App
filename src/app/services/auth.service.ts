import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface IAuth {
  token: string;
}

interface IPost {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: { [key: string]: boolean };
  comments: string[];
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: string = 'http://localhost:3001/auth/login';

  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!mytoken);
  }

  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
  }

  mytoken = localStorage.getItem('authToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.mytoken!,
    }),
  };

  getPostFeeds() {
    return this.http.get<IPost>(
      'http://localhost:3001/posts',
      this.httpOptions
    );
  }
}
