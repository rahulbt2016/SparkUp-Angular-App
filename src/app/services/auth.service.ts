import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BASE_URL } from '../api/config';

export interface IAuth {
  token: string;
}

interface IRegister {
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  email?: string | null | undefined;
  password?: string | null | undefined;
  location?: string | null | undefined;
  occupation?: string | null | undefined;
}

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: string[];
  location: string;
  occupation: string;
  viewedProfile: number;
  impressions: number;
  messages: any[];
  createdAt: string;
  updatedAt: string;
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

interface IFriend {
  _id: string;
  firstName: string;
  lastName: string;
  occupation: string;
  picturePath: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: string = BASE_URL + '/auth/login';

  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
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
          localStorage.setItem('userId', response.user._id);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
  }

  mytoken = localStorage.getItem('authToken');
  userId = localStorage.getItem('userId');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.mytoken!,
    }),
  };

  register(user: IRegister) {
    const body = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      location: user.location,
      occupation: user.occupation,
    };
    return this.http.post(`${BASE_URL}/auth/register`, body);
  }

  getPostFeeds() {
    return this.http.get<IPost[]>(BASE_URL + '/posts', this.httpOptions);
  }

  getUserPosts(userId: string | null) {
    return this.http.get<IPost[]>(
      BASE_URL + '/posts/' + userId,
      this.httpOptions
    );
  }

  getUser(userId: string | null) {
    return this.http.get<IUser>(
      BASE_URL + '/users/' + userId,
      this.httpOptions
    );
  }

  getFriendList(userId: string | null) {
    return this.http.get<IFriend[]>(
      BASE_URL + '/users/' + userId + '/friends/',
      this.httpOptions
    );
  }

  patchFriend(userId: string | null, friendId: string | null): Observable<any> {
    return this.http.patch(
      `${BASE_URL}/users/${userId}/${friendId}`,
      '',
      this.httpOptions
    );
  }

  patchLike(postId: string, userId: string): Observable<any> {
    const url = `${BASE_URL}/posts/${postId}/like`;
    const body = { userId: userId };
    return this.http.patch(url, body, this.httpOptions);
  }

  createPost(
    userId: string,
    description: string,
    picturePath: string | undefined
  ): Observable<any> {
    const body = {
      userId: userId,
      description: description,
      picturePath: picturePath,
    };
    return this.http.post(`${BASE_URL}/posts`, body, this.httpOptions);
  }
}
